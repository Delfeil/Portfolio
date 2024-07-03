import { Component, inject } from '@angular/core';
import { SideProjectsService } from '../../services/side-projects/side-projects.service';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrl: './side-projects.component.less'
})
export class SideProjectsComponent {
  private jobService: SideProjectsService = inject(SideProjectsService);

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
