import { TestBed, inject } from '@angular/core/testing';

import { Services\overlay\overlayService } from './services\overlay\overlay.service';

describe('Services\overlay\overlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\overlay\overlayService]
    });
  });

  it('should be created', inject([Services\overlay\overlayService], (service: Services\overlay\overlayService) => {
    expect(service).toBeTruthy();
  }));
});
