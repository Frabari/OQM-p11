import { OmitType } from '@nestjs/swagger';
import { Ticket } from './ticket.entity';

export class CreateTicketDto extends OmitType(Ticket, ['id', 'desk']) {}
