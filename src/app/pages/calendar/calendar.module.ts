import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarMonthCellComponent } from './calendar-month-cell/calendar-month-cell.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarMonthComponent,
    CalendarMonthCellComponent,
  ],
  imports: [CommonModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
