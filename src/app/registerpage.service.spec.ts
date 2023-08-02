/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterpageService } from './registerpage.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: Registerpage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterpageService],
      imports:[HttpClientTestingModule],
    });
  });

  it('should ...', inject([RegisterpageService], (service: RegisterpageService) => {
    expect(service).toBeTruthy();
  }));
});
