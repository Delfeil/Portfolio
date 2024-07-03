import { Inject, Injectable, inject } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private url: string = "data/education.json";
  
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public getEducationsList(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.url}`);
  }
}
