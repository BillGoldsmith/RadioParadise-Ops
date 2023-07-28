import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsTestScheduledPromosComponent } from './playlists-test-scheduled-promos.component';

describe('PlaylistsTestScheduledPromosComponent', () => {
  let component: PlaylistsTestScheduledPromosComponent;
  let fixture: ComponentFixture<PlaylistsTestScheduledPromosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaylistsTestScheduledPromosComponent]
    });
    fixture = TestBed.createComponent(PlaylistsTestScheduledPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
