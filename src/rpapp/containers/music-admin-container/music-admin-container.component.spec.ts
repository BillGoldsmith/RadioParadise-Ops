import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAdminContainerComponent } from './music-admin-container.component';

describe('MusicAdminContainerComponent', () => {
  let component: MusicAdminContainerComponent;
  let fixture: ComponentFixture<MusicAdminContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MusicAdminContainerComponent]
    });
    fixture = TestBed.createComponent(MusicAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
