import { Component, inject } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less'
})
export class JobsComponent {
  private jobService: JobsService = inject(JobsService);

  protected experiences: Experience[] = [];

  constructor(){}

  private ngOnInit(): void {
    this.jobService.getExperienceList().subscribe({
      next: (data) => {
        this.experiences = data;
      },
      error: (error) => console.error(error)
    });
  }
}
