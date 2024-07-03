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
import {MatDividerModule} from '@angular/material/divider';

import { SummaryComponent } from './components/summary/summary.component';
import { EducationComponent } from './components/education/education.component';
import { provideHttpClient } from '@angular/common/http';
import { ExperienceComponent } from './components/experience/experience.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SideProjectsComponent } from './components/side-projects/side-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    EducationComponent,
    ExperienceComponent,
    JobsComponent,
    SideProjectsComponent
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
    MatDividerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
