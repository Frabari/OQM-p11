import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Desk } from '../desks/desk.entity';

export type ServiceId = number;

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: ServiceId;

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
  @ManyToMany(() => Desk, desk => desk.services, { cascade: true })
  @JoinTable()
  desks: Desk[];
}
