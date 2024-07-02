import { Injectable, inject } from '@angular/core';
import { Education } from '../../interfaces/education';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private url: string = "data/education.json";
  
  private httpClient: HttpClient = inject(HttpClient);

  public getEducationsList(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(`${this.url}`);
  }
  constructor() { }
}
