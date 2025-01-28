import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFlexComponent } from './test-flex.component';

describe('TestFlexComponent', () => {
  let component: TestFlexComponent;
  let fixture: ComponentFixture<TestFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestFlexComponent]
    });
    fixture = TestBed.createComponent(TestFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
