/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopularSemonSectionComponent } from './popular-semon-section.component';

describe('PopularSemonSectionComponent', () => {
  let component: PopularSemonSectionComponent;
  let fixture: ComponentFixture<PopularSemonSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSemonSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSemonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
