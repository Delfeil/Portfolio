import { inject, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './Modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule, MatAccordion} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import { SummaryComponent } from './components/summary/summary.component';
import { EducationComponent } from './components/education/education.component';
import { provideHttpClient } from '@angular/common/http';
import { ExperienceComponent } from './components/experience/experience.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SideProjectsComponent } from './components/side-projects/side-projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceSkillComponent } from './components/experience-skill/experience-skill.component';
import { HeaderComponent } from './components/header/header.component';

import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { TranslateMenuComponent } from './components/translate-menu/translate-menu.component';
import { SwipeDirective } from './directives/swipe.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    EducationComponent,
    ExperienceComponent,
    JobsComponent,
    SideProjectsComponent,
    SkillsComponent,
    ExperienceSkillComponent,
    HeaderComponent,
    TranslateMenuComponent,
    SwipeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatAccordion,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private translate: TranslateService = inject(TranslateService);
  constructor() {
    let browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }
}
