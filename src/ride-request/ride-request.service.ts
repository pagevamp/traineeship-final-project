import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RideRequest } from './ride-request.entity';
import { Repository } from 'typeorm';
import { CreateRideRequestData } from './dto/create-ride-request-data';
import { UpdateRideRequestData } from './dto/update-ride-request-data';

@Injectable()
export class RideRequestService {
  constructor(
    @InjectRepository(RideRequest)
    private readonly rideRequestRepository: Repository<RideRequest>,
  ) {}

  async create(
    userId: string,
    createRideRequestData: CreateRideRequestData,
  ): Promise<RideRequest> {
    const departureRange = `[${createRideRequestData.departureStart.toISOString()}, ${createRideRequestData.departureEnd.toISOString()}]`;
    const rideRequest = this.rideRequestRepository.create({
      passengerId: userId,
      destination: createRideRequestData.destination,
      landmark: createRideRequestData.landmark,
      pickupLocation: createRideRequestData.pickupLocation,
      notes: createRideRequestData.notes,
      departureTime: departureRange,
    });

    return await this.rideRequestRepository.save(rideRequest);
  }

  async update(
    userId: string,
    request_id: string,
    updateRideRequestData: UpdateRideRequestData,
  ): Promise<{ message: string }> {
    if (!request_id) {
      throw new BadRequestException('Request id is required');
    }

    const existingRideRequest = await this.rideRequestRepository.findOne({
      where: {
        id: request_id,
        passengerId: userId,
      },
    });

    if (!existingRideRequest) {
      throw new NotFoundException(
        `Ride request with ID ${request_id} not found`,
      );
    }

    if (existingRideRequest.isAccepted) {
      throw new ConflictException('Accepted rides cannot be edited');
    }

    const { departureStart, departureEnd, ...otherPayload } =
      updateRideRequestData;

    if (
      (departureStart && !departureEnd) ||
      (!departureStart && departureEnd)
    ) {
      throw new BadRequestException(
        'Both departureStart and departureEnd must be provided together',
      );
    }

    const updatedPayload = { ...otherPayload };
    let departureTimeRange = existingRideRequest.departureTime;
    if (departureStart && departureEnd) {
      if (departureStart > departureEnd) {
        throw new BadRequestException('Start time must be before end time');
      }
      departureTimeRange = `[${departureStart.toISOString()}, ${departureEnd.toISOString()}]`;
    }

    const result = await this.rideRequestRepository.update(
      {
        id: request_id,
        passengerId: userId,
        isAccepted: false,
      },
      {
        ...updatedPayload,
        departureTime: departureTimeRange,
      },
    );

    if (result.affected === 0) {
      throw new ConflictException(
        'Could not update ride request, the ride may have already been accepted or cancelled.',
      );
    }
    return { message: 'Ride request has been updated successfully' };
  }

  async delete(
    userId: string,
    request_id: string,
  ): Promise<{ message: string }> {
    if (!request_id) {
      throw new BadRequestException('Request id is required');
    }

    const existingRideRequest = await this.rideRequestRepository.findOne({
      where: {
        id: request_id,
        passengerId: userId,
      },
    });

    if (!existingRideRequest) {
      throw new NotFoundException(
        `Ride request with ID ${request_id} not found`,
      );
    }

    await this.rideRequestRepository.softDelete({
      id: request_id,
      passengerId: userId,
    });

    return { message: 'Ride request has been cancelled successfully' };
  }

  async getById(
    userId: string,
    request_id: string,
  ): Promise<{ message: string; ride: RideRequest }> {
    if (!request_id) {
      throw new BadRequestException('Request id is required');
    }

    const ride = await this.rideRequestRepository.findOne({
      where: {
        id: request_id,
        passengerId: userId,
      },
      withDeleted: true,
    });

    if (!ride) {
      throw new NotFoundException(
        `Ride request with ID ${request_id} not found`,
      );
    }

    return {
      message: 'Ride request has been fetched successfully',
      ride,
    };
  }

  //to get all the ride or individual user
  async getAllByUserId(
    userId: string,
  ): Promise<{ message: string; ride: RideRequest[] }> {
    const ride = await this.rideRequestRepository.find({
      where: { passengerId: userId },
      withDeleted: true,
    });

    return {
      message: 'Ride requests has been fetched successfully',
      ride,
    };
  }

  //to fetch all the pending ride request for riders/drivers
  async getAll(): Promise<{ message: string; ride: RideRequest[] }> {
    const ride = await this.rideRequestRepository.find({
      where: { isAccepted: false },
    });
    return {
      message: 'Ride requests has been fetched successfully',
      ride,
    };
  }
}
