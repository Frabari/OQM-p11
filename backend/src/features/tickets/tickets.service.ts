import { BadRequestException, Injectable } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { QueuesService } from '../queues/queues.service';
import { ServicesService } from '../services/services.service';

@Injectable()
export class TicketsService {
  constructor(
    private queuesService: QueuesService,
    private servicesService: ServicesService,
  ) {}

  async issueTicket(ticket: Ticket) {
    try {
      ticket.service = await this.servicesService.findOne(ticket.service.id);
    } catch (e) {
      throw new BadRequestException('Invalid service id provided in ticket');
    }
    return this.queuesService.enqueueTicket(ticket);
  }
}
