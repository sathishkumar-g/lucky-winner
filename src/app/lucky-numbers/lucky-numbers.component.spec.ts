import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyNumbersComponent } from './lucky-numbers.component';

describe('LuckyNumbersComponent', () => {
  let component: LuckyNumbersComponent;
  let fixture: ComponentFixture<LuckyNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
