import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { ServicesModule } from '../services/services.module';
import { DesksModule } from '../desks/desks.module';

@Module({
  imports: [ServicesModule, DesksModule],
  providers: [QueuesService],
  exports: [QueuesService],
})
export class QueuesModule {}
