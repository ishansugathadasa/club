import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsHistoryComponent } from './ins-history.component';

describe('InsHistoryComponent', () => {
  let component: InsHistoryComponent;
  let fixture: ComponentFixture<InsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
