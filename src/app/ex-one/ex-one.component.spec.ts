import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExOneComponent } from './ex-one.component';

describe('ExOneComponent', () => {
  let component: ExOneComponent;
  let fixture: ComponentFixture<ExOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
