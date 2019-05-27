import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsNavBarComponent } from './ins-nav-bar.component';

describe('InsNavBarComponent', () => {
  let component: InsNavBarComponent;
  let fixture: ComponentFixture<InsNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
