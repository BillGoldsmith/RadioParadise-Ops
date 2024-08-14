import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAccountsRecentComponent } from './reports-accounts-recent.component';

describe('ReportsAccountsRecentComponent', () => {
  let component: ReportsAccountsRecentComponent;
  let fixture: ComponentFixture<ReportsAccountsRecentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsAccountsRecentComponent]
    });
    fixture = TestBed.createComponent(ReportsAccountsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
