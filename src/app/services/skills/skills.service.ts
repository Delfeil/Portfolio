import { Injectable, inject } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private url: string = "data/skills.json"
  
  private httpClient: HttpClient = inject(HttpClient);

  private translate: TranslateService = inject(TranslateService);
  
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

  getTranslation(skill: Skill): string {
    return this.translate.instant(`skills.skill.${skill.name}`)
  }
}
