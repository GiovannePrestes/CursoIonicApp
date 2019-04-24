import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSplitPage } from './layout-split.page';

describe('LayoutSplitPage', () => {
  let component: LayoutSplitPage;
  let fixture: ComponentFixture<LayoutSplitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSplitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSplitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
