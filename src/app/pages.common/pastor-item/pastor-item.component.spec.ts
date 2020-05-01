/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastorItemComponent } from './pastor-item.component';

describe('PastorItemComponent', () => {
  let component: PastorItemComponent;
  let fixture: ComponentFixture<PastorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
