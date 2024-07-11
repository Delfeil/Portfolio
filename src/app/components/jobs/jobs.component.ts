import { Component, inject } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { JobsService } from '../../services/jobs/jobs.service';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less'
})
export class JobsComponent {
  private jobService: JobsService = inject(JobsService);
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

  private getExperiences(): void {
    this.jobService.getExperienceList().subscribe({
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
