import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta5Component } from './gta5.component';

describe('Gta5Component', () => {
  let component: Gta5Component;
  let fixture: ComponentFixture<Gta5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gta5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
