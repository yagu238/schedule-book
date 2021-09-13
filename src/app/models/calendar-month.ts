import { DateTime } from 'luxon';
import { CalendarEvent } from './calendar-event';

export interface CalendarMonth {
  dateTime: DateTime;
  events: CalendarEvent[];
}
