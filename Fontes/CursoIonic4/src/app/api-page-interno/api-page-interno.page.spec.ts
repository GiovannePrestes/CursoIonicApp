import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageInternoPage } from './api-page-interno.page';

describe('ApiPageInternoPage', () => {
  let component: ApiPageInternoPage;
  let fixture: ComponentFixture<ApiPageInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPageInternoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
