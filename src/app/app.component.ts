import { Component, inject, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Delfeil-Casanova';

  @ViewChild('drawer') sidenav?: MatSidenav;

  public iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private translate: TranslateService = inject(TranslateService);

  constructor() {
    this.iconRegistry.addSvgIcon('email', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/email.svg"))
    this.iconRegistry.addSvgIcon('cv', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/cv.svg"))
    this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/linkedin.svg"))
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/github.svg"))
    this.iconRegistry.addSvgIcon('option', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/option.svg"))
    this.iconRegistry.addSvgIcon('back', this.sanitizer.bypassSecurityTrustResourceUrl("/assets/icons/back.svg"))

  }

  public swipeLeft(): void {
    if (this.sidenav?.opened) {
      this.sidenav?.close();
    }
  }

  public swipeRight(): void {
    if (!this.sidenav?.opened) {
      this.sidenav?.open();
    }
  }
}
