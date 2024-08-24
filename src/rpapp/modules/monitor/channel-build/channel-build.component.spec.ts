import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBuildComponent } from './channel-build.component';

describe('ChannelBuildComponent', () => {
  let component: ChannelBuildComponent;
  let fixture: ComponentFixture<ChannelBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChannelBuildComponent]
    });
    fixture = TestBed.createComponent(ChannelBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
