import { DateTime } from 'luxon';
import { CalendarEvent } from './calendar-event';

export interface CalendarMonthDay {
  dateTime: DateTime;
  events: CalendarEvent[];
}
