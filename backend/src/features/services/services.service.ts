import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service, ServiceId } from './service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
  ) {}

  findAll() {
    return this.servicesRepository.find({ select: ['id', 'name'] });
  }

  findOne(id: ServiceId) {
    return this.servicesRepository.findOne(id);
  }
}
