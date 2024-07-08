import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Delfeil-Casanova';

  public iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIcon('email', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/email.svg"))
    this.iconRegistry.addSvgIcon('cv', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/cv.svg"))
    this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/linkedin.svg"))
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/github.svg"))

  }
}
