import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbgamestabComponent } from './ngbgamestab.component';

describe('NgbgamestabComponent', () => {
  let component: NgbgamestabComponent;
  let fixture: ComponentFixture<NgbgamestabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbgamestabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbgamestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
