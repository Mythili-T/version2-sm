/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeachersubjectsComponent } from './teachersubjects.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeachersubjectsComponent', () => {
  let component: TeachersubjectsComponent;
  let fixture: ComponentFixture<TeachersubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersubjectsComponent ],
      providers: [TeachersubjectsComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
