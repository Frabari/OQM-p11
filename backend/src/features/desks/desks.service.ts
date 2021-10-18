import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import {
  Connection,
  EntitySubscriberInterface,
  Repository,
  UpdateEvent,
} from 'typeorm';
import { Subject } from 'rxjs';
import { Desk } from './desk.entity';

@Injectable()
export class DesksService implements EntitySubscriberInterface {
  /**
   * Emits when a desks becomes free
   */
  freeDesks$ = new Subject<Desk>();

  constructor(
    @InjectRepository(Desk) private desksRepository: Repository<Desk>,
    @InjectConnection() readonly connection: Connection,
  ) {
    connection.subscribers.push(this);
    this.findAll().then(desks => {
      desks.forEach(desk => {
        if (desk.free) {
          this.freeDesks$.next(desk);
        }
      });
    });
  }

  listenTo() {
    return Desk;
  }

  afterUpdate(event: UpdateEvent<Desk>) {
    const entity = event.entity as Desk;
    if (entity.free) {
      this.freeDesks$.next(entity);
    }
  }

  findAll() {
    return this.desksRepository.find({ relations: ['services'] });
  }

  updateDesk(desk: Desk) {
    return this.desksRepository.save(desk);
  }
}
