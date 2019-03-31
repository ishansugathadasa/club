import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResReservationComponent } from './res-reservation.component';

describe('ResReservationComponent', () => {
  let component: ResReservationComponent;
  let fixture: ComponentFixture<ResReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
