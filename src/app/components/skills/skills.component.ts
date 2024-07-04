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

  skillsMap: Map<SkillsCategory, Skill[] | undefined> = new Map();

  skillsCategoryEnum: typeof SkillsCategory = SkillsCategory;

  public gridCol: number = 3;

  private ngOnInit(): void {


    const stringKeys = Object
    .values(SkillsCategory)
    .filter((v) => isNaN(Number(v)));

    
    stringKeys.forEach((key, category) => {
      this.skillsMap.set(category, this.skillsService.getSkillsByCategory(key));
    });

  }

  getIconUrl(skill: Skill): string {
    return this.skillsService.getIconUrl(skill);
  }
}
