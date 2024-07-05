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
  
  getSkillsByCategory(skillCategory: string): Observable<Skill[]> {
    return this.httpClient.get<{[key: string] : Skill[]}>(this.url).pipe(
      map(data => data[skillCategory])
    );  
  }

  getSkillByName(name: string): Observable<Skill | undefined> {
    return this.httpClient.get<{[key: string] : Skill[]}>(this.url).pipe(
      map(data => {
        for(let category in data) {
          let skill = data[category].find(skill =>
            skill.name.toLowerCase() == name.toLowerCase()
          );
          if(skill) {
            return skill;
          }
        }
        return undefined;
      })
    );
  }

  getIconUrl(skill: Skill) {
    return `assets/images/skills/${skill.name.toLowerCase()}.png`;
  }
}
