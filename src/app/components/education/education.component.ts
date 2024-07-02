import { Component, inject } from '@angular/core';
import { EducationService } from '../../services/education/education.service';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.less'
})
export class EducationComponent {
  private educationService: EducationService = inject(EducationService);

  protected educations: Education[] = [];

  private ngOnInit(): void {
    this.educationService.getEducationsList().subscribe({
      next: (data) => {
        this.educations = data;
      },
      error: (error) => console.error(error)
    });
  }
}
