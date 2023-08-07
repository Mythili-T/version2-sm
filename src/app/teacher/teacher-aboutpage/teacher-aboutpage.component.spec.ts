/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherAboutpageComponent } from './teacher-aboutpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeacherAboutpageComponent', () => {
  let component: TeacherAboutpageComponent;
  let fixture: ComponentFixture<TeacherAboutpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAboutpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
