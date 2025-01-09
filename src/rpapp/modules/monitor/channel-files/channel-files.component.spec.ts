import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFilesComponent } from './channel-files.component';

describe('ChannelFilesComponent', () => {
  let component: ChannelFilesComponent;
  let fixture: ComponentFixture<ChannelFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChannelFilesComponent]
    });
    fixture = TestBed.createComponent(ChannelFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
