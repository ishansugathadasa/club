import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierSharedComponent } from './cashier-shared.component';

describe('CashierSharedComponent', () => {
  let component: CashierSharedComponent;
  let fixture: ComponentFixture<CashierSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
