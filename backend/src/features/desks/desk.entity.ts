import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from '../services/service.entity';

@Entity()
export class Desk {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The services available at this Desk
   */
  @ManyToMany(() => Service, service => service.desks)
  services: Service[];

  /**
   * Whether this Desk is open to serve new customers
   */
  @Column({ default: false })
  free: boolean;
}
