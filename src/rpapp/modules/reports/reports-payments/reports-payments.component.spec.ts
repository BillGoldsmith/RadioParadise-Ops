import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPaymentsComponent } from './reports-payments.component';

describe('ReportsPaymentsComponent', () => {
  let component: ReportsPaymentsComponent;
  let fixture: ComponentFixture<ReportsPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsPaymentsComponent]
    });
    fixture = TestBed.createComponent(ReportsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
