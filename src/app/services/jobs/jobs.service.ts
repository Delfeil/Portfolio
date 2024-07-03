import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private url: string = "data/jobs.json";
  
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public getExperienceList(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.url}`);
  }
}
