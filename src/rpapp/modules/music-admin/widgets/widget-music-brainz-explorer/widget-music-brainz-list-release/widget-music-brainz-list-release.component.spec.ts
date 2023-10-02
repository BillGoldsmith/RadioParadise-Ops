import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicBrainzListReleaseComponent } from './widget-music-brainz-list-release.component';

describe('WidgetMusicBrainzListReleaseComponent', () => {
  let component: WidgetMusicBrainzListReleaseComponent;
  let fixture: ComponentFixture<WidgetMusicBrainzListReleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicBrainzListReleaseComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicBrainzListReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
