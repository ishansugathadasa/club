import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallBookComponent } from './hall-book.component';

describe('HallBookComponent', () => {
  let component: HallBookComponent;
  let fixture: ComponentFixture<HallBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
