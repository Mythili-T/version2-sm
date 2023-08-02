/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminServiceService } from './admin-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminServiceService],
      imports:[HttpClientTestingModule],
    });
  });

  it('should ...', inject([AdminServiceService], (service: AdminServiceService) => {
    expect(service).toBeTruthy();
  }));
});
