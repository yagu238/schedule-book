import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss'],
})
export class CalendarMonthComponent implements OnInit {
  private _dateTime!: DateTime;

  @Input()
  set dateTime(value: DateTime) {
    this._dateTime = value;

    const startOfMonth = this.dateTime.startOf('month');
    this.dateTimes = this.getCalendarDaysForMonth(startOfMonth);
  }
  get dateTime() {
    return this._dateTime;
  }

  readonly weeks: string[] = ['日', '月', '火', '水', '木', '金', '土'];
  dateTimes: DateTime[] = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   * 月のカレンダーを取得する
   * @param startOfMonth 月初日
   */
  private getCalendarDaysForMonth(startOfMonth: DateTime) {
    let dateTimes: DateTime[] = [];

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
      dateTimes.push(startOfCalendar);
      startOfCalendar = startOfCalendar.plus({ days: 1 });
      if (startOfCalendar > endOfCalendar) break;
    }

    return dateTimes;
  }
}
