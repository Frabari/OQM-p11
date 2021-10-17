import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [QueuesService],
})
export class QueuesModule {}
