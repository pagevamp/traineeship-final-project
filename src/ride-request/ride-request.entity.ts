import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'ride_requests' })
export class RideRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'passenger_id' })
  passengerId: string;

  @Column({ type: 'varchar', length: 255 })
  destination: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  landmark: string | null;

  @Column({ type: 'varchar', length: 255, name: 'pickup_location' })
  pickupLocation: string;

  @Column({ type: 'varchar', length: 3000, nullable: true })
  notes: string | null;

  @Column({ type: 'tstzrange', name: 'departure_time' })
  departureTime: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt: Date | null;
}
