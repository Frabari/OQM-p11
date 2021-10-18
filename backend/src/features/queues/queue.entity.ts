import { Service } from '../services/service.entity';
import { Ticket } from '../tickets/ticket.entity';

export class Queue {
  /**
   * The service this Queue is related to
   */
  service: Service;
  /**
   * The FIFO queue
   */
  tickets: Ticket[];
  /**
   * The number to be assigned to the next ticket
   */
  counter: number;
}
