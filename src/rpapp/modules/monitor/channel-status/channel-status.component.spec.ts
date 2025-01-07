import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelStatusComponent } from './channel-status.component';

describe('ChannelStatusComponent', () => {
  let component: ChannelStatusComponent;
  let fixture: ComponentFixture<ChannelStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChannelStatusComponent]
    });
    fixture = TestBed.createComponent(ChannelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
