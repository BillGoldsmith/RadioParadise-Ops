import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAccountsActiveComponent } from './reports-accounts-active.component';

describe('ReportsAccountsActiveComponent', () => {
  let component: ReportsAccountsActiveComponent;
  let fixture: ComponentFixture<ReportsAccountsActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsAccountsActiveComponent]
    });
    fixture = TestBed.createComponent(ReportsAccountsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
