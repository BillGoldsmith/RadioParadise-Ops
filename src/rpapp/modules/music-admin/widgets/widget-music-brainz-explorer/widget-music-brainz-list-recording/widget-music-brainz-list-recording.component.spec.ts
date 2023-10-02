import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicBrainzListRecordingComponent } from './widget-music-brainz-list-recording.component';

describe('WidgetMusicBrainzListRecordingComponent', () => {
  let component: WidgetMusicBrainzListRecordingComponent;
  let fixture: ComponentFixture<WidgetMusicBrainzListRecordingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicBrainzListRecordingComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicBrainzListRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
