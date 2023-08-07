/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentComponent } from './student.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent,AdminHeaderComponent ],
      providers: [StudentComponent],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
