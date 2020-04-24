/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsSectionComponent } from './news-section.component';

describe('NewsSectionComponent', () => {
  let component: NewsSectionComponent;
  let fixture: ComponentFixture<NewsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
