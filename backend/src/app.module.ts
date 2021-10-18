import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from './features/services/services.module';
import { DesksModule } from './features/desks/desks.module';
import { QueuesModule } from './features/queues/queues.module';
import { TicketsModule } from './features/tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServicesModule,
    DesksModule,
    QueuesModule,
    TicketsModule,
  ],
})
export class AppModule {}
