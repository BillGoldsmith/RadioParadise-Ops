import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicBrainzListReleaseGroupComponent } from './widget-music-brainz-list-release-group.component';

describe('WidgetMusicBrainzListReleaseGroupComponent', () => {
  let component: WidgetMusicBrainzListReleaseGroupComponent;
  let fixture: ComponentFixture<WidgetMusicBrainzListReleaseGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicBrainzListReleaseGroupComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicBrainzListReleaseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
