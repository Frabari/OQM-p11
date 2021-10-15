import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './features/services/services.module';
import { DesksModule } from './features/desks/desks.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
