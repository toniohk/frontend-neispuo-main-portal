import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPage } from './students.page';

describe('StudentsPage', () => {
  let component: StudentsPage;
  let fixture: ComponentFixture<StudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
