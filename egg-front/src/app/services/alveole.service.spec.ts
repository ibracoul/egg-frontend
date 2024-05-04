import { TestBed } from '@angular/core/testing';

import { AlveoleService } from './alveole.service';

describe('AlveoleService', () => {
  let service: AlveoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlveoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
