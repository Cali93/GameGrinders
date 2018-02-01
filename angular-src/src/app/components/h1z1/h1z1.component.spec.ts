import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1z1Component } from './h1z1.component';

describe('H1z1Component', () => {
  let component: H1z1Component;
  let fixture: ComponentFixture<H1z1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1z1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1z1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
