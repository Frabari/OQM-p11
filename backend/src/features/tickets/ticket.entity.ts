import { Service } from '../services/service.entity';
import { Desk } from '../desks/desk.entity';

export class Ticket {
  /**
   * The number printed on the physical issued ticket,
   * maybe with a prefix linked to the service?
   */
  id: string; // or number?

  /**
   * The service requested by this ticket
   */
  service: Service;

  /**
   * The Desk that will serve this Ticket
   * (if `null` the Ticket is still waiting)
   * @default null
   */
  desk?: Desk;

  /**
   * The time when this ticket was issued to be
   * used for waiting time calculations
   */
  issuedAt: Date;
}
