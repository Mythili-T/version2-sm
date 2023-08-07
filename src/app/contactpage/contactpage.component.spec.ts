/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactpageComponent } from './contactpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../Header/Header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

describe('ContactpageComponent', () => {
  let component: ContactpageComponent;
  let fixture: ComponentFixture<ContactpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpageComponent,HeaderComponent,FooterComponent ],
      providers: [ContactpageComponent ],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
