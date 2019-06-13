import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilliardTabbleComponent } from './billiard-tabble.component';

describe('BilliardTabbleComponent', () => {
  let component: BilliardTabbleComponent;
  let fixture: ComponentFixture<BilliardTabbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilliardTabbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliardTabbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
