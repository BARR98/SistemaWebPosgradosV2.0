import { TestBed } from '@angular/core/testing';

import { MaestriasService } from './maestrias.service';

describe('MaestriasService', () => {
  let service: MaestriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
