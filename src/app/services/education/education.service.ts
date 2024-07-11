import { Injectable, inject } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private url: string = "data/education.json";
  
  private httpClient: HttpClient = inject(HttpClient);
  private translate: TranslateService = inject(TranslateService);

  constructor() {}

  public getEducationsList(): Observable<Experience[]>{
    let translatedUrl: string = this.url;
    if(this.translate.currentLang == "fr") {
      translatedUrl = "data/education-fr.json"
    }
    return this.httpClient.get<Experience[]>(`${translatedUrl}`);
  }
}
