import { inject, Injectable } from '@angular/core';
import { SkillsCategory } from '../../enums/skills-category';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsCategoryService {
  
  private translate: TranslateService = inject(TranslateService);

  getTranslation(skillCategory: SkillsCategory): string {
    let category: string = SkillsCategory[skillCategory];
    return this.translate.instant(`skills.categories.${category}`)
  }
}
