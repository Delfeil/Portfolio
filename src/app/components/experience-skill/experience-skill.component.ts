import { Component, inject, Input } from '@angular/core';
import { SkillsService } from '../../services/skills/skills.service';
import { Skill } from '../../interfaces/skill';
import { error } from 'console';

@Component({
  selector: 'app-experience-skill',
  templateUrl: './experience-skill.component.html',
  styleUrl: './experience-skill.component.less'
})
export class ExperienceSkillComponent {
  
  private skillService: SkillsService = inject(SkillsService);
  
  @Input() public skillName: string = "";
  
  skill?: Skill;
  private ngOnInit(): void {
    this.skillService.getSkillByName(this.skillName).subscribe({
      next: (data) => {
        this.skill = data;
      },
      error: error => console.error(error)
    });
  }

  getIconUrl(skill: Skill|undefined): string {
    if(skill) {
      return this.skillService.getIconUrl(skill);
    } else {
      return "";
    }
  }
}
