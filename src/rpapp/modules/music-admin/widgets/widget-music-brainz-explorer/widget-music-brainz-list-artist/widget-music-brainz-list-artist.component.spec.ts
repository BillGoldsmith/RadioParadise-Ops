import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicBrainzListArtistComponent } from './widget-music-brainz-list-artist.component';

describe('WidgetMusicBrainzListArtistComponent', () => {
  let component: WidgetMusicBrainzListArtistComponent;
  let fixture: ComponentFixture<WidgetMusicBrainzListArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicBrainzListArtistComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicBrainzListArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
