import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSendyListComponent } from './reports-sendy-list.component';

describe('ReportsSendyListComponent', () => {
  let component: ReportsSendyListComponent;
  let fixture: ComponentFixture<ReportsSendyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsSendyListComponent]
    });
    fixture = TestBed.createComponent(ReportsSendyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
