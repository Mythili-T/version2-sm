/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherHomepageComponent } from './teacher-homepage.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeacherHomepageComponent', () => {
  let component: TeacherHomepageComponent;
  let fixture: ComponentFixture<TeacherHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHomepageComponent ],
      providers: [TeacherHomepageComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
