import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtjoinLoginComponent } from './atjoin-login.component';

describe('AtjoinLoginComponent', () => {
  let component: AtjoinLoginComponent;
  let fixture: ComponentFixture<AtjoinLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtjoinLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtjoinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
