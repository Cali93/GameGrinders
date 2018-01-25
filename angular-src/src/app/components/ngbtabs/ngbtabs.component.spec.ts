import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbtabsComponent } from './ngbtabs.component';

describe('NgbtabsComponent', () => {
  let component: NgbtabsComponent;
  let fixture: ComponentFixture<NgbtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
