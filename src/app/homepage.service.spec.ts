/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomepageService } from './homepage.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: Homepage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomepageService],
      imports:[HttpClientTestingModule],
    });
  });

  it('should ...', inject([HomepageService], (service: HomepageService) => {
    expect(service).toBeTruthy();
  }));
});
