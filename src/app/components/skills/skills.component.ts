import { Component, inject } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';
import { SkillsCategory } from '../../enums/skills-category';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.less'
})
export class SkillsComponent {

  private skillsService: SkillsService = inject(SkillsService);

  skillsMap: Map<SkillsCategory, Skill[]> = new Map();

  skillsCategoryEnum: typeof SkillsCategory = SkillsCategory;

  public gridCol: number = 3;

  private ngOnInit(): void {
    let stringKeys = Object.keys(SkillsCategory)
      .filter((key) => isNaN(Number(key)))
      .map(key => key as string);

    
    stringKeys.forEach(category => {
      this.skillsService.getSkillsByCategory(category).subscribe({
        next: data => {
          this.skillsMap.set(SkillsCategory[category as keyof typeof SkillsCategory], data);
        },
        error: error => console.error(error)
      });
    });
  }

  getIconUrl(skill: Skill): string {
    return this.skillsService.getIconUrl(skill);
  }
}
