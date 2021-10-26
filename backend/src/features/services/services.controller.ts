import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServicesService } from './services.service';
import { Service } from './service.entity';

@ApiTags(Service.name)
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  /**
   * Lists all the available services
   */
  @Get()
  async findAll() {
    return this.servicesService.findAll();
  }
}
