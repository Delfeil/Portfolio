import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.less'
})
export class SummaryComponent {
  public iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private translate: TranslateService = inject(TranslateService);

  constructor() {
    this.iconRegistry.addSvgIcon('email', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/email.svg"))
    this.iconRegistry.addSvgIcon('cv', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/cv.svg"))
    this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/linkedin.svg"))
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/github.svg"))

  }

}
