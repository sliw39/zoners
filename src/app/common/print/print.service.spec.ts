import { TestBed, inject } from '@angular/core/testing';

import { PrintService } from './print.service';

describe('FrintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintService]
    });
  });

  it('should be created', inject([PrintService], (service: PrintService) => {
    expect(service).toBeTruthy();
  }));
});
