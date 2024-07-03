import { Component, inject } from '@angular/core';
import { EducationService } from '../../services/education/education.service';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.less',
  providers: [
    {provide: 'data/education.json', useValue: "dataPath"}
  ]
})
export class EducationComponent {
  private educationService: EducationService = inject(EducationService);

  protected experiences: Experience[] = [];

  constructor(){}

  private ngOnInit(): void {
    this.educationService.getEducationsList().subscribe({
      next: (data) => {
        this.experiences = data;
      },
      error: (error) => console.error(error)
    });
  }
}
