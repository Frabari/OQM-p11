import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Desk } from './desk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Desk])],
})
export class DesksModule {}
