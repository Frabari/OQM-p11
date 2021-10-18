import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { QueuesModule } from '../queues/queues.module';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [QueuesModule, ServicesModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
