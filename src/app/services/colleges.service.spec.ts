import { TestBed } from '@angular/core/testing';

import { CollegesService } from './colleges.service';

describe('CollegesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegesService = TestBed.get(CollegesService);
    expect(service).toBeTruthy();
  });
});
