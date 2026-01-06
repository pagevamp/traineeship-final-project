import { ConflictException } from '@nestjs/common';

export function getDateRangeFloor(dateRange: string) {
  const firstDate = dateRange
    .replace(/[[\]()]/g, '')
    .split(',')[0]
    ?.trim();
  const date = new Date(firstDate);
  return date;
}

export function getDateRangeCeiling(dateRange: string) {
  const lastDate = dateRange
    .replace(/[[\]()]/g, '')
    .split(',')[1]
    ?.trim();
  const newDate = new Date(lastDate);
  return newDate;
}

export function validateDepartureGap(start: Date, end: Date): void {
  const diffMs = end.getTime() - start.getTime();
  const diffMinutes = diffMs / (1000 * 60);

  if (diffMinutes <= 0) {
    throw new ConflictException(
      'Departure end time must be after departure start time',
    );
  }

  if (diffMinutes > 60) {
    throw new ConflictException(
      'Departure time gap cannot be more than 1 hour',
    );
  }
}
