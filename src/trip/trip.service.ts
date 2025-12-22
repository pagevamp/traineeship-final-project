import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './entities/trip.entity';
import { CreateTripData, TripStatus } from './dto/create_trips.dto';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Trip)
    private readonly tripRepository: Repository<Trip>,
  ) {}

  async create(
    userId: string,
    contactNumber: string,
    createTripData: CreateTripData,
  ): Promise<Trip> {
    const trip = this.tripRepository.create({
      driverId: userId,
      contactNumber: contactNumber,
      requestId: createTripData.requestId,
      status: TripStatus.NOT_STARTED,
      vehicleType: createTripData.vehicleType,
    });

    return await this.tripRepository.save(trip);
  }
}
