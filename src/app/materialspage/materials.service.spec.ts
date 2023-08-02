/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaterialsService } from './materials.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: Materials', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialsService],
      imports:[HttpClientTestingModule],
    });
  });

  it('should ...', inject([MaterialsService], (service: MaterialsService) => {
    expect(service).toBeTruthy();
  }));
});
