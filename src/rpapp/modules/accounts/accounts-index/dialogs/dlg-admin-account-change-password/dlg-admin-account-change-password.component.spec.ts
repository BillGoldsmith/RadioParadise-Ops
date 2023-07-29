import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DlgAdminAccountChangePasswordComponent } from './dlg-admin-account-change-password.component';

describe('DlgAdminAccountChangePasswordComponent', () => {
  let component: DlgAdminAccountChangePasswordComponent;
  let fixture: ComponentFixture<DlgAdminAccountChangePasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgAdminAccountChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgAdminAccountChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
