/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CSEnotesComponent } from './CSEnotes.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';

describe('CSEnotesComponent', () => {
  let component: CSEnotesComponent;
  let fixture: ComponentFixture<CSEnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSEnotesComponent,HeaderComponent,FooterComponent ],
      providers: [CSEnotesComponent],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSEnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
