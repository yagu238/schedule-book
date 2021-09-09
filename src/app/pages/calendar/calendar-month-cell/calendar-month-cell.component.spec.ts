import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthCellComponent } from './calendar-month-cell.component';

describe('CalendarMonthCellComponent', () => {
  let component: CalendarMonthCellComponent;
  let fixture: ComponentFixture<CalendarMonthCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMonthCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
