import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class SideProjectsService {
  private url: string = "data/sideProjects.json";
  
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public getExperienceList(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.url}`);
  }
}
