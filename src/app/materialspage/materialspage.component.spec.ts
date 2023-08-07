/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaterialspageComponent } from './materialspage.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';

describe('MaterialspageComponent', () => {
  let component: MaterialspageComponent;
  let fixture: ComponentFixture<MaterialspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialspageComponent,HeaderComponent,FooterComponent ],
      providers: [ MaterialspageComponent ],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
