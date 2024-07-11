import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translate-menu',
  templateUrl: './translate-menu.component.html',
  styleUrl: './translate-menu.component.less'
})
export class TranslateMenuComponent {

  
  public iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private translate: TranslateService = inject(TranslateService);
  
  constructor() {
    this.iconRegistry.addSvgIcon('translation', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/translation.svg"))
    this.iconRegistry.addSvgIcon('fr', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/fr.svg"))
    this.iconRegistry.addSvgIcon('en', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/en.svg"))
    
  }
  
  public switchTranslation(language: string): void {
    this.translate.use(language);
  }

  getCurrentLang(): string {
    return this.translate.currentLang ? this.translate.currentLang : this.translate.defaultLang;
  }
}
