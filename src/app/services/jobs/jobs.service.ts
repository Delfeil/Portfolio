import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../interfaces/experience';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private url: string = "data/jobs.json";
  
  private httpClient: HttpClient = inject(HttpClient);
  private translate: TranslateService = inject(TranslateService);

  constructor() {}

  public getExperienceList(): Observable<Experience[]>{
    let translatedUrl: string = this.url;
    if(this.translate.currentLang == "fr") {
      translatedUrl = "data/jobs-fr.json"
    }
    return this.httpClient.get<Experience[]>(`${translatedUrl}`);
  }
}
