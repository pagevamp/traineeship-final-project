import {
  IsString,
  IsOptional,
  ValidateNested,
  IsObject,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RideRequest } from '../entities/ride-request.entity';
export class PassengerData {
  @IsString()
  @IsOptional()
  readonly firstName?: string | null;

  @IsString()
  @IsOptional()
  readonly lastName?: string | null;

  @IsString()
  @IsOptional()
  readonly phoneNumber?: string | null;

  @IsString()
  @IsOptional()
  readonly profileImage?: string | null;

  @IsString()
  @IsOptional()
  readonly primaryLocation?: string | null;
}

export class GetRideResponseData extends RideRequest {
  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PassengerData)
  readonly passenger: PassengerData;
}
