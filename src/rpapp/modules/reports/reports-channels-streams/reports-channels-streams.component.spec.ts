import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsChannelsStreamsComponent } from './reports-channels-streams.component';

describe('ReportsChannelsStreamsComponent', () => {
  let component: ReportsChannelsStreamsComponent;
  let fixture: ComponentFixture<ReportsChannelsStreamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsChannelsStreamsComponent]
    });
    fixture = TestBed.createComponent(ReportsChannelsStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
