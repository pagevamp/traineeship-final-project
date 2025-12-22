import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from './entities/trip.entity';
import { AuthGuardModule } from '@/auth-guard/auth-guard.module';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Trip]), AuthGuardModule],
  controllers: [TripController],
  providers: [TripService],
  exports: [TripService],
})
export class TripModule {}
