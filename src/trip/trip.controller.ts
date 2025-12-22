import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripData } from './dto/create_trips.dto';
import { AuthGuardService } from '@/auth-guard/auth-guard.service';
import type { RequestWithUser } from '@/types/RequestWithUser';

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @UseGuards(AuthGuardService)
  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async createTrip(
    @Body() createTripDto: CreateTripData,
    @Req() request: RequestWithUser,
  ) {
    const userId = request.user?.id;
    if (!userId) {
      throw new NotFoundException('User not found');
    }
    const contactNumber = request.user?.publicMetadata?.contactNumber as string;
    return await this.tripService.create(userId, contactNumber, createTripDto);
  }
}
