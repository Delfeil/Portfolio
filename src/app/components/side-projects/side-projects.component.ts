import { Component, inject } from '@angular/core';
import { SideProjectsService } from '../../services/side-projects/side-projects.service';
import { Experience } from '../../interfaces/experience';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrl: './side-projects.component.less'
})
export class SideProjectsComponent {
  private jobService: SideProjectsService = inject(SideProjectsService);
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
