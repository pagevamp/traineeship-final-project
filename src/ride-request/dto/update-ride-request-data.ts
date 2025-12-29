import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateRideRequestMetaData {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly destination: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly landmark?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly pickupLocation: string;

  @IsOptional()
  @IsString()
  @MaxLength(3000)
  readonly notes?: string;
}

export class UpdateRideRequestData extends PartialType(
  UpdateRideRequestMetaData,
) {}
