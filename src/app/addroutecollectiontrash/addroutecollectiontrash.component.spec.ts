import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroutecollectiontrashComponent } from './addroutecollectiontrash.component';

describe('AddroutecollectiontrashComponent', () => {
  let component: AddroutecollectiontrashComponent;
  let fixture: ComponentFixture<AddroutecollectiontrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroutecollectiontrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroutecollectiontrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
