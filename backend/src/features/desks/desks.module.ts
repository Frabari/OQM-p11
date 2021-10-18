import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Desk } from './desk.entity';
import { DesksService } from './desks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Desk])],
  providers: [DesksService],
  exports: [DesksService],
})
export class DesksModule {}
