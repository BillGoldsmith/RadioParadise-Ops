import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsTestLiveComponent } from './playlists-test-live.component';

describe('PlaylistsTestLiveComponent', () => {
  let component: PlaylistsTestLiveComponent;
  let fixture: ComponentFixture<PlaylistsTestLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaylistsTestLiveComponent]
    });
    fixture = TestBed.createComponent(PlaylistsTestLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
