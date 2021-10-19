import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Desk, DeskId } from './desk.entity';
import { UpdateDeskDto } from './update-desk.dto';
import { DesksService } from './desks.service';

@ApiTags(Desk.name)
@Controller('desks')
export class DesksController {
  constructor(private desksService: DesksService) {}

  @Patch(':id')
  updateDesk(@Body() body: UpdateDeskDto, @Param('id') id: DeskId) {
    return this.desksService.updateDesk({
      id,
      ...body,
    });
  }
}
