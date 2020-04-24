/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CellgroupsComponent } from './cellgroups.component';

describe('CellgroupsComponent', () => {
  let component: CellgroupsComponent;
  let fixture: ComponentFixture<CellgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
