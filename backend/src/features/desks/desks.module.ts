import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Desk } from './desk.entity';
import { DesksService } from './desks.service';
import { DesksController } from './desks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Desk])],
  providers: [DesksService],
  exports: [DesksService],
  controllers: [DesksController],
})
export class DesksModule {}
