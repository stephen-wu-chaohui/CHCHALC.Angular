/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastorEditComponent } from './pastor-edit.component';

describe('PastorEditComponent', () => {
  let component: PastorEditComponent;
  let fixture: ComponentFixture<PastorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
