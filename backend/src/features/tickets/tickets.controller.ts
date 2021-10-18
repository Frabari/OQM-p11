import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './create-ticket.dto';

@ApiTags(Ticket.name)
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  /**
   * Creates and enqueues a new ticket
   */
  @Post()
  async issueTicket(@Body() body: CreateTicketDto) {
    return this.ticketsService.issueTicket(body);
  }
}
