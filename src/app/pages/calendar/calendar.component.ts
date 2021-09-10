import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() dateTime!: DateTime;

  constructor() {}

  ngOnInit(): void {}
}
