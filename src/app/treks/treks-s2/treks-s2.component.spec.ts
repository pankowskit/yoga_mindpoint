import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksS2Component } from './treks-s2.component';

describe('TreksS2Component', () => {
  let component: TreksS2Component;
  let fixture: ComponentFixture<TreksS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreksS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
