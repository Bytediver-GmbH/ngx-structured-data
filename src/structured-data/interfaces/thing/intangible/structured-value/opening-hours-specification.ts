import {Date} from '../../../data-types/date';
import {Time} from "../../../data-types/time";
import {DayOfWeek} from "../enumeration/day-of-week";

export interface OpeningHoursSpecification {
  dayOfWeek: DayOfWeek[] | DayOfWeek,
  opens: Time,
  closes: Time,
  validFrom?: Date,
  validThrough?: Date
}
