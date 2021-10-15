import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Desk } from '../desks/desk.entity';

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
  @ManyToMany(() => Desk, desk => desk.services, { cascade: true, eager: true })
  @JoinTable()
  desks: Desk[];
}
