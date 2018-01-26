import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps4gamesComponent } from './ps4games.component';

describe('Ps4gamesComponent', () => {
  let component: Ps4gamesComponent;
  let fixture: ComponentFixture<Ps4gamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps4gamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps4gamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
