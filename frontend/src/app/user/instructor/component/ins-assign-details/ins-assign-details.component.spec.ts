import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsAssignDetailsComponent } from './ins-assign-details.component';

describe('InsAssignDetailsComponent', () => {
  let component: InsAssignDetailsComponent;
  let fixture: ComponentFixture<InsAssignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsAssignDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsAssignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
