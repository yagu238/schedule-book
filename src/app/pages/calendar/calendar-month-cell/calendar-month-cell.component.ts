import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { CalendarEvent } from 'src/app/models/calendar-event';

@Component({
  selector: 'app-calendar-month-cell',
  templateUrl: './calendar-month-cell.component.html',
  styleUrls: ['./calendar-month-cell.component.scss'],
})
export class CalendarMonthCellComponent implements OnInit {
  @Input() dateTime!: DateTime;
  @Input() events!: CalendarEvent[];

  constructor() {}

  ngOnInit(): void {}
}
