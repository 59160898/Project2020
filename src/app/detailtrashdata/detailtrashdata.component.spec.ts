import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtrashdataComponent } from './detailtrashdata.component';

describe('DetailtrashdataComponent', () => {
  let component: DetailtrashdataComponent;
  let fixture: ComponentFixture<DetailtrashdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailtrashdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtrashdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
