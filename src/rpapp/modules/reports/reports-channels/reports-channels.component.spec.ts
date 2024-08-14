import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsChannelsComponent } from './reports-channels.component';

describe('ReportsChannelsComponent', () => {
  let component: ReportsChannelsComponent;
  let fixture: ComponentFixture<ReportsChannelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsChannelsComponent]
    });
    fixture = TestBed.createComponent(ReportsChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
