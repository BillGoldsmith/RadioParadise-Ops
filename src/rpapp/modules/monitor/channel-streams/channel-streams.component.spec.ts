import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelStreamsComponent } from './channel-streams.component';

describe('ChannelStreamsComponent', () => {
  let component: ChannelStreamsComponent;
  let fixture: ComponentFixture<ChannelStreamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChannelStreamsComponent]
    });
    fixture = TestBed.createComponent(ChannelStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
