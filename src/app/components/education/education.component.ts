import { Component, inject } from '@angular/core';
import { EducationService } from '../../services/education/education.service';
import { Experience } from '../../interfaces/experience';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
  private translate: TranslateService = inject(TranslateService);

  protected experiences: Experience[] = [];
  private langChangeSubscription?: Subscription;

  constructor(){}

  private ngOnInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.getExperiences();
    });
    this.getExperiences();
  }

  getExperiences(): void {
    this.educationService.getEducationsList().subscribe({
      next: (data) => {
        this.experiences = data;
      },
      error: (error) => console.error(error)
    });
  }

  private ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
