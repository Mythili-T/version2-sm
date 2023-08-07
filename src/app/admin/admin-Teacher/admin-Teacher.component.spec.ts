/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminTeacherComponent } from './admin-Teacher.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('AdminTeacherComponent', () => {
  let component: AdminTeacherComponent;
  let fixture: ComponentFixture<AdminTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherComponent ,AdminHeaderComponent],
      providers: [AdminTeacherComponent],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
