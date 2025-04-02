import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }

  getMissionByFlightNumber(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/${flightNumber}`);
  }

  getFilteredMissions(filters: any): Observable<Mission[]> {
    let url = `${this.apiUrl}?`;
    
    if (filters.year) {
      url += `launch_year=${filters.year}&`;
    }
    
    if (filters.launch !== null) {
      url += `launch_success=${filters.launch}&`;
    }
    
    if (filters.land !== null) {
      url += `land_success=${filters.land}&`;
    }
    
    // Remove trailing & if present
    url = url.endsWith('&') ? url.slice(0, -1) : url;
    
    return this.http.get<Mission[]>(url);
  }
}