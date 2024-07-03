import { Component, inject } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';
import { SkillsCategory } from '../../enums/skills-category';
import { Skill } from '../../interfaces/iSkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.less'
})
export class SkillsComponent {

  private skillsService: SkillsService = inject(SkillsService);

  skillsMap: Map<SkillsCategory, Skill[]> = new Map();

  skillsCategoryEnum: typeof SkillsCategory = SkillsCategory;

  private ngOnInit(): void {
    const stringKeys = Object
    .values(SkillsCategory)
    .filter((v) => isNaN(Number(v)));

    stringKeys.forEach((key, category) => {
      this.skillsService.getSkillsByCategory(category).subscribe({
          next: (data) => {
          this.skillsMap.set(category, data);
        },
        error: (error) => console.error(error)
      });
    });

  }

  getIconUrl(skill: Skill): string {
    return this.skillsService.getIconUrl(skill);
  }
}
