import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicBrainzExplorerBreadtrailComponent } from './widget-music-brainz-explorer-breadtrail.component';

describe('WidgetMusicBrainzExplorerBreadtrailComponent', () => {
  let component: WidgetMusicBrainzExplorerBreadtrailComponent;
  let fixture: ComponentFixture<WidgetMusicBrainzExplorerBreadtrailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicBrainzExplorerBreadtrailComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicBrainzExplorerBreadtrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
