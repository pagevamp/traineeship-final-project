import { Module } from '@nestjs/common';
import { RideRequestController } from './ride-request.controller';
import { RideRequestService } from './ride-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuardModule } from '@/auth-guard/auth-guard.module';
import { Trip } from '@/trip/entities/trip.entity';
import { RideRequest } from './entities/ride-request.entity';
@Module({
  imports: [TypeOrmModule.forFeature([RideRequest, Trip]), AuthGuardModule],
  controllers: [RideRequestController],
  providers: [RideRequestService],
  exports: [RideRequestService],
})
export class RideRequestModule {}
