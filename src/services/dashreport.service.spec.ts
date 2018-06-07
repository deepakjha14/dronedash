import { TestBed, inject } from '@angular/core/testing';

import { DashreportService } from './dashreport.service';

describe('DashreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashreportService]
    });
  });

  it('should be created', inject([DashreportService], (service: DashreportService) => {
    expect(service).toBeTruthy();
  }));
});
