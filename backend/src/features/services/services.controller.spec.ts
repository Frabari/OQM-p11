import { Test, TestingModule } from '@nestjs/testing';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';

describe('ServicesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Service])],
      controllers: [ServicesController],
      providers: [ServicesService],
    }).compile();
  });

  describe('getServices', () => {
    it('should return all services', () => {
      const servicesController =
        app.get<ServicesController>(ServicesController);
      expect(servicesController.findAll().then(s => s.length)).toEqual(3);
    });
  });
});
