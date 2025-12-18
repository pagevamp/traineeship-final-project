import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RideRequestService } from './ride-request.service';
import { CreateRideRequestData } from './dto/create-ride-request-data';
import { AuthGuardService } from '@/auth-guard/auth-guard.service';
import type { RequestWithUser } from '@/types/RequestWithUser';
import { UpdateRideRequestData } from './dto/update-ride-request-data';

@Controller('ride-request')
export class RideRequestController {
  constructor(private readonly rideRequestService: RideRequestService) {}

  @UseGuards(AuthGuardService)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createRideRequest(
    @Body() body: CreateRideRequestData,
    @Req() request: RequestWithUser,
  ) {
    const userId = request.user?.id;
    return await this.rideRequestService.create(userId!, body);
  }

  @UseGuards(AuthGuardService)
  @HttpCode(HttpStatus.CREATED)
  @Patch(':id')
  async updateRideRequest(
    @Body() body: UpdateRideRequestData,
    @Param('id', ParseUUIDPipe) id: string,
    @Req() request: RequestWithUser,
  ) {
    const userId = request.user?.id;
    return await this.rideRequestService.update(userId!, id, body);
  }
}
