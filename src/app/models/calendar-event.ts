import { DateTime } from 'luxon';

export interface CalendarEvent {
  start: DateTime;
  end?: DateTime;
  title: string;
  note?: string;
}
