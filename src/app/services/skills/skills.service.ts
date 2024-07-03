import { Injectable, inject } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { SkillsCategory } from '../../enums/skills-category';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private url: string = "data/skills.json"
  
  private httpClient: HttpClient = inject(HttpClient);
  
  constructor() { }
  
  getSkillsByCategory(skillCategory: SkillsCategory): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url)
      .pipe(
        map((skills: Skill[]) => skills
          .filter((skill: Skill) => skill.category == skillCategory)
        ),
      );
  }

  getIconUrl(skill: Skill) {
    return `assets/images/${skill.name.toLowerCase()}.png`;
  }
}
