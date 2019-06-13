import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLinksComponent } from './index-links.component';

describe('IndexLinksComponent', () => {
  let component: IndexLinksComponent;
  let fixture: ComponentFixture<IndexLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
