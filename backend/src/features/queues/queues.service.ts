import { Injectable } from '@nestjs/common';
import { BehaviorSubject, filter, take } from 'rxjs';
import { Queue } from './queue.entity';
import { ServiceId } from '../services/service.entity';
import { ServicesService } from '../services/services.service';
import { Ticket } from '../tickets/ticket.entity';

@Injectable()
export class QueuesService {
  private queuesSubject = new BehaviorSubject<Record<ServiceId, Queue>>(null);
  queues$ = this.queuesSubject.pipe(filter(v => v != null));
  private queuesReady$ = this.queues$.pipe(take(1));

  constructor(private servicesService: ServicesService) {
    servicesService.findAll().then(services => {
      this.queuesSubject.next(
        Object.fromEntries(
          services.map(s => [s.id, { service: s, tickets: [] } as Queue]),
        ),
      );
    });
  }

  enqueueTicket(ticket: Ticket) {
    this.queuesReady$.subscribe(queues => {
      const serviceId = ticket.service.id;
      if (serviceId in queues) {
        const newQueues = { ...queues };
        newQueues[serviceId].tickets.push(ticket);
        this.queuesSubject.next(newQueues);
      }
    });
  }
}
