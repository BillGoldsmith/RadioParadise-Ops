import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheInvalidationComponent } from './cache-invalidation.component';

describe('CacheInvalidationComponent', () => {
  let component: CacheInvalidationComponent;
  let fixture: ComponentFixture<CacheInvalidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CacheInvalidationComponent]
    });
    fixture = TestBed.createComponent(CacheInvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
