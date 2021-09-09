import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-calendar-month-cell',
  templateUrl: './calendar-month-cell.component.html',
  styleUrls: ['./calendar-month-cell.component.scss'],
})
export class CalendarMonthCellComponent implements OnInit {
  @Input() dateTime!: DateTime;

  constructor() {}

  ngOnInit(): void {}
}
