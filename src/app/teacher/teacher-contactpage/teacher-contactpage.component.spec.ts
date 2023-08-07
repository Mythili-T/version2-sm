/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherContactpageComponent } from './teacher-contactpage.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeacherContactpageComponent', () => {
  let component: TeacherContactpageComponent;
  let fixture: ComponentFixture<TeacherContactpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherContactpageComponent ],
      providers: [TeacherContactpageComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
