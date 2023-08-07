/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherStudentsComponent } from './Teacher-Students.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeacherStudentsComponent', () => {
  let component: TeacherStudentsComponent;
  let fixture: ComponentFixture<TeacherStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStudentsComponent ],
      providers: [TeacherStudentsComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
