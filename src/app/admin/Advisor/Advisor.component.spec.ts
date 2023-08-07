/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdvisorComponent } from './Advisor.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdvisorComponent', () => {
  let component: AdvisorComponent;
  let fixture: ComponentFixture<AdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorComponent,AdminHeaderComponent ],
      providers: [AdvisorComponent ],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
