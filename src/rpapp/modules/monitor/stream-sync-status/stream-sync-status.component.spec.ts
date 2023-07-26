import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSyncStatusComponent } from './stream-sync-status.component';

describe('StreamSyncStatusComponent', () => {
  let component: StreamSyncStatusComponent;
  let fixture: ComponentFixture<StreamSyncStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StreamSyncStatusComponent]
    });
    fixture = TestBed.createComponent(StreamSyncStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
