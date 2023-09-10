import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicRadparExplorerComponent } from './widget-music-radpar-explorer.component';

describe('MusicRadparExplorerComponent', () => {
  let component: WidgetMusicRadparExplorerComponent;
  let fixture: ComponentFixture<WidgetMusicRadparExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicRadparExplorerComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicRadparExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
