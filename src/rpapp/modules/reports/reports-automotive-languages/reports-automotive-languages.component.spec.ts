import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAutomotiveLanguagesComponent } from './reports-automotive-languages.component';

describe('ReportsAutomotiveLanguagesComponent', () => {
  let component: ReportsAutomotiveLanguagesComponent;
  let fixture: ComponentFixture<ReportsAutomotiveLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsAutomotiveLanguagesComponent]
    });
    fixture = TestBed.createComponent(ReportsAutomotiveLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
