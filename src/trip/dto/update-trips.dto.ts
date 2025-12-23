import { PartialType } from '@nestjs/mapped-types';
import { CreateTripDto } from './create-trips.dto';

export class UpdateTripData extends PartialType(CreateTripDto) {}
