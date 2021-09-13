import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { CalendarEvent } from 'src/app/models/calendar-event';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { CalendarMonthDay } from 'src/app/models/calendar-month-day';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss'],
})
export class CalendarMonthComponent implements OnInit {
  readonly headers: string[] = ['日', '月', '火', '水', '木', '金', '土'];
  days: CalendarMonthDay[] = [];

  private _calendarMonth!: CalendarMonth;

  @Input()
  set calendarMonth(value: CalendarMonth) {
    this._calendarMonth = value;
    this.days = this.getCalendarDaysForMonth(
      this._calendarMonth.dateTime.startOf('month'),
      this._calendarMonth.events
    );
  }
  get calendarMonth() {
    return this._calendarMonth;
  }

  constructor() {}

  ngOnInit(): void {}

  /**
   * 月のカレンダーを取得する
   * @param startOfMonth 月初日
   * @param events 全てのイベント
   */
  private getCalendarDaysForMonth(
    startOfMonth: DateTime,
    events: CalendarEvent[]
  ) {
    let days: CalendarMonthDay[] = [];

    // 月末日取得
    const endOfMonth = startOfMonth.endOf('month');

    // カレンダー始まり曜日
    const startOfWeekDay = 7;
    // カレンダー終わり曜日
    const endOfWeekDay = 6;

    // カレンダーの始まりの日付取得
    let startOfCalendar: DateTime = startOfMonth;
    while (true) {
      if (startOfCalendar.weekday === startOfWeekDay) break;
      startOfCalendar = startOfCalendar.minus({ days: 1 });
    }

    // カレンダーの終わりの日付取得
    let endOfCalendar: DateTime = endOfMonth;
    while (true) {
      if (endOfCalendar.weekday === endOfWeekDay) break;
      endOfCalendar = endOfCalendar.plus({ days: 1 });
    }

    // カレンダーの日付を追加していく
    while (true) {
      const dailyEvents = events.filter((e) =>
        this.equalsDateTimeYMD(e.start, startOfCalendar)
      );
      days.push({
        dateTime: startOfCalendar,
        events: dailyEvents,
      });
      startOfCalendar = startOfCalendar.plus({ days: 1 });
      if (startOfCalendar > endOfCalendar) break;
    }

    return days;
  }

  /**
   * 年月日が一致するかどうか
   * @param dt1
   * @param dt2
   * @returns
   */
  private equalsDateTimeYMD(dt1: DateTime, dt2: DateTime) {
    return (
      dt1.year === dt2.year && dt1.month === dt2.month && dt1.day === dt2.day
    );
  }
}
