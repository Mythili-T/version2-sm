/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminqueriesComponent } from './adminqueries.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('AdminqueriesComponent', () => {
  let component: AdminqueriesComponent;
  let fixture: ComponentFixture<AdminqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminqueriesComponent ,AdminHeaderComponent],
      providers: [AdminqueriesComponent],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
