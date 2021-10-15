import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Desk } from '../desk/desk.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * A display name for this service
   */
  @Column()
  name: string;

  /**
   * A letter to be used as a prefix for Ticket.number?
   */
  @Column({ default: '' })
  prefix?: string;

  /**
   * The average waiting time for this service to be
   * used for waiting time calculations
   */
  @Column()
  serviceTime: number;

  /**
   * The desks where this service is available
   */
  @ManyToMany((type) => Desk, (desk) => desk.services)
  desks: Desk[];
}
