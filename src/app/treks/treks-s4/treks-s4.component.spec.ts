import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksS4Component } from './treks-s4.component';

describe('TreksS4Component', () => {
  let component: TreksS4Component;
  let fixture: ComponentFixture<TreksS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreksS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
