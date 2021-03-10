export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface OpeningHoursSpecification {
  dayOfWeek: DayOfWeek[] | DayOfWeek,
  opens: string,
  closes: string
}
