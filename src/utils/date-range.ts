export function getDateRangeFloor(dateRange: Date) {
  const dateString = dateRange.toDateString();
  const firstDate = dateString.replace(/[[\]]/g, '').split(',');
  return firstDate;
}
