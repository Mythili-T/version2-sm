/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from './loginpage.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule ,Routes} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../Header/Header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ,HeaderComponent],
      providers: [{provide:ActivatedRoute,useValue:ActivatedRoute}],
      imports:[HttpClientTestingModule,RouterTestingModule,RouterModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
