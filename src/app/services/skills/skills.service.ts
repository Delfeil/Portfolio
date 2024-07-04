import { Injectable, inject } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { SkillsCategory } from '../../enums/skills-category';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, toArray } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private url: string = "data/skills.json"
  
  private httpClient: HttpClient = inject(HttpClient);
  
  constructor() { }
  
  getSkillsByCategoryOld(skillCategory: SkillsCategory): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url)
      .pipe(
        map((skills: Skill[]) => skills
          .filter((skill: Skill) => skill.category == skillCategory)
        ),
      );
  }
  
  skillsMap: {[id: string] : Skill[]} = {};
  
  getSkillsByCategory(skillCategory: string | SkillsCategory): Skill[] {
    this.httpClient.get<{[id: string] : Skill[]}>(this.url).subscribe(
      {
        next: data => {
          this.skillsMap = data;
        },
        error: error => {
          console.error(error);
          return [];
        }
      }
    );
    return this.skillsMap[skillCategory];
  }

  getIconUrl(skill: Skill) {
    return `assets/images/skills/${skill.name.toLowerCase()}.png`;
  }
}
