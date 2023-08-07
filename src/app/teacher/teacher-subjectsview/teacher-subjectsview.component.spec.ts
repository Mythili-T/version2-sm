/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TeacherSubjectsviewComponent } from './teacher-subjectsview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeacherSubjectsviewComponent', () => {
  let component: TeacherSubjectsviewComponent;
  let fixture: ComponentFixture<TeacherSubjectsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSubjectsviewComponent ],
      providers: [TeacherSubjectsviewComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSubjectsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
