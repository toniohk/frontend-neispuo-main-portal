import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBooksPage } from './school-books.page';

describe('SchoolBooksPage', () => {
  let component: SchoolBooksPage;
  let fixture: ComponentFixture<SchoolBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolBooksPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
