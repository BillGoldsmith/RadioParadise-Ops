import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DlgAdminAccountChangeLevelComponent } from './dlg-admin-account-change-level.component';

describe('DlgAdminAccountChangeLevelComponent', () => {
  let component: DlgAdminAccountChangeLevelComponent;
  let fixture: ComponentFixture<DlgAdminAccountChangeLevelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgAdminAccountChangeLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgAdminAccountChangeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
