import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.less',
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent {
  @Input() public experience: Experience = {
    link: "",
    imageUrl: "",
    years: "",
    title: "",
    skills: "",
    description: "",
    realisations: []
  };
}
