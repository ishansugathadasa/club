import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingPoolBookingComponent } from './swimming-pool-booking.component';

describe('SwimmingPoolBookingComponent', () => {
  let component: SwimmingPoolBookingComponent;
  let fixture: ComponentFixture<SwimmingPoolBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingPoolBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingPoolBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
