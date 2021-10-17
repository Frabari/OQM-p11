import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { QueuesService } from '../queues/queues.service';

@Injectable()
export class TicketsService {
  constructor(private queuesService: QueuesService) {}

  issueTicket(ticket: Ticket) {
    return this.queuesService.enqueueTicket(ticket);
  }
}
