import { TestBed } from '@angular/core/testing';

import { SkillsCategoryService } from './skills-category.service';

describe('SkillsCategoryService', () => {
  let service: SkillsCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
