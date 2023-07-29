import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsLinksComponent } from './docs-links.component';

describe('DocsLinksComponent', () => {
  let component: DocsLinksComponent;
  let fixture: ComponentFixture<DocsLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DocsLinksComponent]
    });
    fixture = TestBed.createComponent(DocsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
