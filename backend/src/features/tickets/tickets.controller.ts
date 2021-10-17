import { Controller, Post, Req } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async issueTicket(@Req() req) {
    return this.ticketsService.issueTicket(req.body);
  }
}
