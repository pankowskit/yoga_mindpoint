import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksS3Component } from './treks-s3.component';

describe('TreksS3Component', () => {
  let component: TreksS3Component;
  let fixture: ComponentFixture<TreksS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreksS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
