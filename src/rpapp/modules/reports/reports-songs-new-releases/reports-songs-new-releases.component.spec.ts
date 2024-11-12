import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSongsNewReleasesComponent } from './reports-songs-new-releases.component';

describe('ReportsSongsNewReleasesComponent', () => {
  let component: ReportsSongsNewReleasesComponent;
  let fixture: ComponentFixture<ReportsSongsNewReleasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsSongsNewReleasesComponent]
    });
    fixture = TestBed.createComponent(ReportsSongsNewReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
