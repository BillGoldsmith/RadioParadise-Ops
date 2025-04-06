import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDebugComponent } from './flex-debug.component';

describe('FlexDebugComponent', () => {
  let component: FlexDebugComponent;
  let fixture: ComponentFixture<FlexDebugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlexDebugComponent]
    });
    fixture = TestBed.createComponent(FlexDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
