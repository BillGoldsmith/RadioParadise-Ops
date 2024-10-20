import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAccountsDownloadComponent } from './reports-accounts-download.component';

describe('ReportsAccountsDownloadComponent', () => {
  let component: ReportsAccountsDownloadComponent;
  let fixture: ComponentFixture<ReportsAccountsDownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsAccountsDownloadComponent]
    });
    fixture = TestBed.createComponent(ReportsAccountsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
