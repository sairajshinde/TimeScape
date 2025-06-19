import { TestBed } from '@angular/core/testing';

import { TOILibraryService } from './toi-library.service';

describe('TOILibraryService', () => {
  let service: TOILibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TOILibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
