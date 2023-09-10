import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBrainzExplorerComponent } from './music-brainz-explorer.component';

describe('MusicBrainzExplorerComponent', () => {
  let component: MusicBrainzExplorerComponent;
  let fixture: ComponentFixture<MusicBrainzExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MusicBrainzExplorerComponent]
    });
    fixture = TestBed.createComponent(MusicBrainzExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
