/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SermonComponent } from './today-sermon-section.component';

describe('SermonComponent', () => {
  let component: SermonComponent;
  let fixture: ComponentFixture<SermonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
