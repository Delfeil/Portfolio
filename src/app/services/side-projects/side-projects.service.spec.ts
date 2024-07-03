import { TestBed } from '@angular/core/testing';

import { SideProjectsService } from './side-projects.service';

describe('SideProjectsService', () => {
  let service: SideProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
