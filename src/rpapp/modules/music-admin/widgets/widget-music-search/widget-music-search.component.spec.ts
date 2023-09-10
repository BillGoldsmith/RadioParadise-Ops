import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicSearchComponent } from './widget-music-search.component';

describe('MusicSearchFilterComponent', () => {
  let component: WidgetMusicSearchComponent;
  let fixture: ComponentFixture<WidgetMusicSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetMusicSearchComponent]
    });
    fixture = TestBed.createComponent(WidgetMusicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
