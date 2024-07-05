import { NgModule } from '@angular/core';
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

import { SummaryComponent } from './components/summary/summary.component';
import { EducationComponent } from './components/education/education.component';
import { provideHttpClient } from '@angular/common/http';
import { ExperienceComponent } from './components/experience/experience.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SideProjectsComponent } from './components/side-projects/side-projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceSkillComponent } from './components/experience-skill/experience-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    EducationComponent,
    ExperienceComponent,
    JobsComponent,
    SideProjectsComponent,
    SkillsComponent,
    ExperienceSkillComponent
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
    MatChipsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
