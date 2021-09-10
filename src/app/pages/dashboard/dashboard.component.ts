import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dateTime = DateTime.now().startOf('month');

  constructor() {}

  ngOnInit(): void {}

  /** 前月 */
  prevMonth() {
    this.dateTime = this.dateTime.minus({ months: 1 });
  }

  /** 次月 */
  nextMonth() {
    this.dateTime = this.dateTime.plus({ months: 1 });
  }
}
