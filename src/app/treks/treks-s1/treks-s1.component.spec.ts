import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksS1Component } from './treks-s1.component';

describe('TreksS1Component', () => {
  let component: TreksS1Component;
  let fixture: ComponentFixture<TreksS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreksS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
