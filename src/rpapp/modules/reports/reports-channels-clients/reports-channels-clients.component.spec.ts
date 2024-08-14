import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsChannelsClientsComponent } from './reports-channels-clients.component';

describe('ReportsChannelsClientsComponent', () => {
  let component: ReportsChannelsClientsComponent;
  let fixture: ComponentFixture<ReportsChannelsClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsChannelsClientsComponent]
    });
    fixture = TestBed.createComponent(ReportsChannelsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
