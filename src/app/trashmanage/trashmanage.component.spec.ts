import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashmanageComponent } from './trashmanage.component';

describe('TrashmanageComponent', () => {
  let component: TrashmanageComponent;
  let fixture: ComponentFixture<TrashmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
