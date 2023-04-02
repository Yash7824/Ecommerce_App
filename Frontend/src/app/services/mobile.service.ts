import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from '../models/Mobile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  url = 'Mobile';
  constructor(private http: HttpClient) {}

  public getMobiles(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(`${environment.apiUrl}/${this.url}`);
  }

  public addMobile(mobile: Mobile): Observable<Mobile[]> {
    return this.http.post<Mobile[]>(
      `${environment.apiUrl}/${this.url}`,
      mobile
    );
  }
}
