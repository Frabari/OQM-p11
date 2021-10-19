import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { ServicesModule } from '../services/services.module';
import { DesksModule } from '../desks/desks.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [ServicesModule, DesksModule, EventsModule],
  providers: [QueuesService],
  exports: [QueuesService],
})
export class QueuesModule {}
