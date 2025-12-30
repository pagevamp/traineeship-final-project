import { Type } from 'class-transformer';
import { Trip } from '../entities/trip.entity';
import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { PassengerData } from '@/ride-request/dto/get-ride-response-data';
import { Driver } from '@/trip/dto/get-driver-data';
import { PartialType } from '@nestjs/mapped-types';

export class GetTripsByDriverResponseDto extends PartialType(Trip) {
  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Driver)
  readonly driver: Driver;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => PassengerData)
  readonly passenger: PassengerData;
}
