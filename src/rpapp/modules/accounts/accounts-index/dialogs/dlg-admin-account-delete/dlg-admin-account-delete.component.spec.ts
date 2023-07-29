import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DlgAdminAccountDeleteComponent } from './dlg-admin-account-delete.component';

describe('DlgAdminAccountDeleteComponent', () => {
  let component: DlgAdminAccountDeleteComponent;
  let fixture: ComponentFixture<DlgAdminAccountDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgAdminAccountDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgAdminAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
