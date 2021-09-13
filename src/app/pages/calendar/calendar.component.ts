import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { CalendarEvent } from 'src/app/models/calendar-event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() dateTime!: DateTime;
  @Input() events: CalendarEvent[] = [];

  constructor() {}

  ngOnInit(): void {}
}
