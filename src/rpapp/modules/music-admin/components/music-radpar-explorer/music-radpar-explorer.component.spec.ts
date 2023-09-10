import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRadparExplorerComponent } from './music-radpar-explorer.component';

describe('MusicRadparExplorerComponent', () => {
  let component: MusicRadparExplorerComponent;
  let fixture: ComponentFixture<MusicRadparExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MusicRadparExplorerComponent]
    });
    fixture = TestBed.createComponent(MusicRadparExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
