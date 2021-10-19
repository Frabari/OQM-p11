import { PickType } from '@nestjs/swagger';
import { Desk } from './desk.entity';

export class UpdateDeskDto extends PickType(Desk, ['free']) {}
