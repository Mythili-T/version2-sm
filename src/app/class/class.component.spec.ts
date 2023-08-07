/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClassComponent } from './class.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';

describe('ClassComponent', () => {
  let component: ClassComponent;
  let fixture: ComponentFixture<ClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassComponent,HeaderComponent,FooterComponent ],
      providers: [ClassComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
