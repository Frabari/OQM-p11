import { BadRequestException, Injectable } from '@nestjs/common';
import {
  BehaviorSubject,
  filter,
  firstValueFrom,
  map,
  mergeMap,
  Subject,
  take,
} from 'rxjs';
import { Queue } from './queue.entity';
import { ServiceId } from '../services/service.entity';
import { ServicesService } from '../services/services.service';
import { Ticket } from '../tickets/ticket.entity';
import { DesksService } from '../desks/desks.service';
import { EventsGateway } from '../events/events.gateway';

type Queues = Record<ServiceId, Queue>;

@Injectable()
export class QueuesService {
  /**
   * Emits when there is any update on any queue
   */
  queues$ = new Subject<Queues>();
  private queues: Queues = {};
  private _queuesReady$ = new BehaviorSubject<boolean>(false);
  private queuesReady$ = this._queuesReady$.pipe(filter(v => v === true));
  calledTickets$ = this.desksService.freeDesks$.pipe(
    mergeMap(desk =>
      this.queues$.pipe(
        map(queues =>
          desk.services
            .map(s => queues[s.id])
            .filter(q => q.tickets.some(t => t.desk == null))
            .sort((a, b) => b.tickets.length - a.tickets.length),
        ),
        filter(queues => queues.length > 0),
        take(1),
        map(queues => {
          let queue: Queue;
          const longestQueues = queues.filter(
            (q, _, arr) => q.tickets.length === arr[0].tickets.length,
          );
          if (longestQueues.length === 1) {
            queue = longestQueues[0];
          } else {
            queue = longestQueues.reduce((acc, val) =>
              acc.service.serviceTime < val.service.serviceTime ? acc : val,
            );
          }
          const ticket = queue.tickets.reverse().find(t => t.desk == null);
          if (ticket) {
            desk.free = false;
            ticket.desk = desk;
            this.desksService.updateDesk(desk);
            this.queues$.next(this.queues);
          }
          return ticket;
        }),
      ),
    ),
  );

  constructor(
    private servicesService: ServicesService,
    private desksService: DesksService,
    private eventsGateway: EventsGateway,
  ) {
    servicesService.findAll().then(services => {
      this.queues = Object.fromEntries(
        services.map(s => [
          s.id,
          { service: s, tickets: [], counter: 1 } as Queue,
        ]),
      );
      this._queuesReady$.next(true);
    });
    this.calledTickets$.subscribe(ticket => {
      this.eventsGateway.server.emit('ticket-called', ticket);
    });
  }

  enqueueTicket(ticket: Ticket) {
    return firstValueFrom(
      this.queuesReady$.pipe(
        map(() => {
          const serviceId = ticket.service.id;
          if (serviceId in this.queues) {
            const queue = this.queues[serviceId];
            queue.tickets.push(ticket);
            ticket.id = `${ticket.service.prefix}${queue.counter++}`;
            this.queues$.next(this.queues);
            return ticket;
          } else {
            throw new BadRequestException(
              'Invalid service id provided in ticket',
            );
          }
        }),
      ),
    );
  }
}
