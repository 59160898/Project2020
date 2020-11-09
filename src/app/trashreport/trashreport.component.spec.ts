import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashreportComponent } from './trashreport.component';

describe('TrashreportComponent', () => {
  let component: TrashreportComponent;
  let fixture: ComponentFixture<TrashreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
