/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherMaterialsaddComponent } from './teacher-materialsadd.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeacherMaterialsaddComponent', () => {
  let component: TeacherMaterialsaddComponent;
  let fixture: ComponentFixture<TeacherMaterialsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMaterialsaddComponent ],
      providers: [TeacherMaterialsaddComponent ],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMaterialsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
