import { Service } from '../services/service.entity';
import { Ticket } from '../tickets/ticket.entity';

export interface Queue {
  /**
   * The service this Queue is related to
   */
  service: Service;
  /**
   * The FIFO queue
   */
  tickets: Ticket[];
}
