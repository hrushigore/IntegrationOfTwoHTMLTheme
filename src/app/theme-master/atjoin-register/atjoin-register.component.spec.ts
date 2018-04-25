import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtjoinRegisterComponent } from './atjoin-register.component';

describe('AtjoinRegisterComponent', () => {
  let component: AtjoinRegisterComponent;
  let fixture: ComponentFixture<AtjoinRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtjoinRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtjoinRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
