import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcollectortrashComponent } from './addcollectortrash.component';

describe('AddcollectortrashComponent', () => {
  let component: AddcollectortrashComponent;
  let fixture: ComponentFixture<AddcollectortrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcollectortrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcollectortrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
