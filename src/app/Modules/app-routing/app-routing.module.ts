import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from '../../components/summary/summary.component';
import { EducationComponent } from '../../components/education/education.component';
import { JobsComponent } from '../../components/jobs/jobs.component';

const routes: Routes = [
  {path: "", component: SummaryComponent},
  {path: "skills", component: SummaryComponent},
  {path: "education", component: EducationComponent},
  {path: "experiences", component: JobsComponent},
  {path: "contact", component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
