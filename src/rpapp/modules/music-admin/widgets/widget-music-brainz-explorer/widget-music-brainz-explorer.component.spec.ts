import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicBrainzExplorerComponent } from './widget-music-brainz-explorer.component';

describe('MusicBrainzExplorerComponent', () => {
  let component: WidgetMusicBrainzExplorerComponent;
  let fixture: ComponentFixture<WidgetMusicBrainzExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicBrainzExplorerComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicBrainzExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
