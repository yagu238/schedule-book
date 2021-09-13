import { DateTime } from 'luxon';
import { CalendarEvent } from 'src/app/models/calendar-event';

export const TestEventData: CalendarEvent[] = [
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
    }),
    title: 'テストタイトル１',
  },
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
      hour: 12,
    }),
    end: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
      hour: 15,
    }),
    title: 'テストタイトル２',
    note: '備考',
  },
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
    }),
    title: 'テストタイトル１２',
  },
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
    }),
    title: 'テストタイトル１２３',
  },
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
    }),
    title: 'テストタイトル１２３４４４４４４４４',
  },
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 14,
    }),
    title:
      'テストタイトル１２３４５５５５５５５５５５５５５５５５５５５５５５５',
  },
  {
    start: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 15,
      hour: 15,
      minute: 30,
    }),
    end: DateTime.fromObject({
      year: 2021,
      month: 9,
      day: 15,
      hour: 17,
      minute: 30,
    }),
    title: 'テストタイトル３',
  },
];
