import { Entity, Column, Index, PrimaryColumn } from 'typeorm';

@Index('IDX_users_primary_location', ['primaryLocation'])
@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({ type: 'varchar', name: 'user_id' })
  readonly userId: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  readonly email: string;

  @Column({ type: 'varchar', length: 255, name: 'first_name', nullable: true })
  readonly firstName: string | null;

  @Column({ type: 'varchar', length: 255, name: 'last_name', nullable: true })
  readonly lastName: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'primary_location',
    nullable: true,
  })
  readonly primaryLocation: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'contact_number',
    nullable: true,
  })
  readonly contactNumber: string | null;
}
