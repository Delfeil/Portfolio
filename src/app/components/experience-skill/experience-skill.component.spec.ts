import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSkillComponent } from './experience-skill.component';

describe('ExperienceSkillsListComponent', () => {
  let component: ExperienceSkillComponent;
  let fixture: ComponentFixture<ExperienceSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
