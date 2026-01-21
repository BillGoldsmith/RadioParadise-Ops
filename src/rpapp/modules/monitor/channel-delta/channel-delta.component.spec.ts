import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDeltaComponent } from './channel-delta.component';

describe('ChannelDeltaComponent', () => {
  let component: ChannelDeltaComponent;
  let fixture: ComponentFixture<ChannelDeltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChannelDeltaComponent]
    });
    fixture = TestBed.createComponent(ChannelDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
