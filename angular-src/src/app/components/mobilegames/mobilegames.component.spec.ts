import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilegamesComponent } from './mobilegames.component';

describe('MobilegamesComponent', () => {
  let component: MobilegamesComponent;
  let fixture: ComponentFixture<MobilegamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilegamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
