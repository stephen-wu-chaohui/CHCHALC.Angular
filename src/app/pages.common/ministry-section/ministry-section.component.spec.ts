/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinistrySectionComponent } from './ministry-section.component';

describe('MinistrySectionComponent', () => {
  let component: MinistrySectionComponent;
  let fixture: ComponentFixture<MinistrySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistrySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistrySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
