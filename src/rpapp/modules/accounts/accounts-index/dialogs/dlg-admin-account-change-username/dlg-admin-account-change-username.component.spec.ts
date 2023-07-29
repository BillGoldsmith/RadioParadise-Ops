import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DlgAdminAccountChangeUsernameComponent } from './dlg-admin-account-change-username.component';

describe('DlgAdminAccountChangeUsernameComponent', () => {
  let component: DlgAdminAccountChangeUsernameComponent;
  let fixture: ComponentFixture<DlgAdminAccountChangeUsernameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgAdminAccountChangeUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgAdminAccountChangeUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
