import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCheckboxInternoMesesComponent } from './component-checkbox-interno-meses.component';

describe('ComponentCheckboxInternoMesesComponent', () => {
  let component: ComponentCheckboxInternoMesesComponent;
  let fixture: ComponentFixture<ComponentCheckboxInternoMesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCheckboxInternoMesesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCheckboxInternoMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
