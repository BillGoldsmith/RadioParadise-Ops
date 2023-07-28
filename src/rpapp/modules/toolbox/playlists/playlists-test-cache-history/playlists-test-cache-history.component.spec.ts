import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsTestCacheHistoryComponent } from './playlists-test-cache-history.component';

describe('PlaylistsTestCacheHistoryComponent', () => {
  let component: PlaylistsTestCacheHistoryComponent;
  let fixture: ComponentFixture<PlaylistsTestCacheHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaylistsTestCacheHistoryComponent]
    });
    fixture = TestBed.createComponent(PlaylistsTestCacheHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
