import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoverArtComponent } from './test-cover-art.component';

describe('TestCoverArtComponent', () => {
  let component: TestCoverArtComponent;
  let fixture: ComponentFixture<TestCoverArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestCoverArtComponent]
    });
    fixture = TestBed.createComponent(TestCoverArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
