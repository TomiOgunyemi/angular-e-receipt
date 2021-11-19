import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExTwoComponent } from './ex-two.component';

describe('ExTwoComponent', () => {
  let component: ExTwoComponent;
  let fixture: ComponentFixture<ExTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
