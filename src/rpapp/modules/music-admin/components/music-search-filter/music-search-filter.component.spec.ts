import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSearchFilterComponent } from './music-search-filter.component';

describe('MusicSearchFilterComponent', () => {
  let component: MusicSearchFilterComponent;
  let fixture: ComponentFixture<MusicSearchFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MusicSearchFilterComponent]
    });
    fixture = TestBed.createComponent(MusicSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
