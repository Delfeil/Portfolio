import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from '../../components/summary/summary.component';
import { EducationComponent } from '../../components/education/education.component';
import { JobsComponent } from '../../components/jobs/jobs.component';
import { SideProjectsComponent } from '../../components/side-projects/side-projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';

const routes: Routes = [
  {path: "", component: SummaryComponent},
  {path: "skills", component: SkillsComponent},
  {path: "education", component: EducationComponent},
  {path: "experiences", component: JobsComponent},
  {path: "sideProjects", component: SideProjectsComponent},
  {path: "contact", component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
