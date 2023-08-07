/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutpageComponent } from './aboutpage.component';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';

describe('AboutpageComponent', () => {
  let component: AboutpageComponent;
  let fixture: ComponentFixture<AboutpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpageComponent ,HeaderComponent,FooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
