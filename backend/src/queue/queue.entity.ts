import { Service } from '../service/service.entity';
import { Ticket } from '../ticket/ticket.entity';

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
