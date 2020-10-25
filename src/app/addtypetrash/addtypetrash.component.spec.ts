import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypetrashComponent } from './addtypetrash.component';

describe('AddtypetrashComponent', () => {
  let component: AddtypetrashComponent;
  let fixture: ComponentFixture<AddtypetrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtypetrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtypetrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
