import { Module } from '@nestjs/common';
import { RideRequestController } from './ride-request.controller';
import { RideRequestService } from './ride-request.service';

@Module({
  controllers: [RideRequestController],
  providers: [RideRequestService]
})
export class RideRequestModule {}
