/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherqueriesComponent } from './teacherqueries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeacherqueriesComponent', () => {
  let component: TeacherqueriesComponent;
  let fixture: ComponentFixture<TeacherqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherqueriesComponent ],
      providers: [TeacherqueriesComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
