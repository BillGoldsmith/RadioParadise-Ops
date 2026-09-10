import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPlaylistComponent } from './channel-playlist.component';

describe('ChannelPlaylistComponent', () => {
  let component: ChannelPlaylistComponent;
  let fixture: ComponentFixture<ChannelPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChannelPlaylistComponent]
    });
    fixture = TestBed.createComponent(ChannelPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
