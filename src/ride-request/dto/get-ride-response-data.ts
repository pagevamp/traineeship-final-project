import {
  IsString,
  IsOptional,
  ValidateNested,
  IsObject,
  IsNotEmpty,
  MaxLength,
  IsPhoneNumber,
  IsUrl,
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

export class Driver {
  @IsString()
  @MaxLength(255)
  readonly firstName?: string | null;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  readonly lastName?: string | null;

  @IsPhoneNumber()
  @IsOptional()
  @MaxLength(255)
  readonly phoneNumber?: string | null;

  @IsUrl()
  @IsOptional()
  @MaxLength(255)
  readonly profileImage?: string | null;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  readonly primaryLocation?: string | null;
}

export class GetRideResponseData extends RideRequest {
  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PassengerData)
  readonly passenger: PassengerData;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => Driver)
  readonly driver?: Driver | null;
}
