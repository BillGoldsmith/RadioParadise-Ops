import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DlgAdminAccountChangeEmailComponent } from './dlg-admin-account-change-email.component';

describe('DlgAdminAccountChangeEmailComponent', () => {
  let component: DlgAdminAccountChangeEmailComponent;
  let fixture: ComponentFixture<DlgAdminAccountChangeEmailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgAdminAccountChangeEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgAdminAccountChangeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
