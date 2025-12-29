import { TripStatus } from '@/types/trips';
import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateTripDto {
  @IsNotEmpty()
  @IsEnum(TripStatus)
  @MaxLength(255)
  readonly status: TripStatus;
}
