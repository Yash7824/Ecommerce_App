import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Laptop } from '../models/Laptop';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  url = 'Laptop';
  constructor(private http: HttpClient) {}

  public getLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getLaptop(id: string): Observable<Laptop> {
    return this.http.get<Laptop>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createLaptop(laptop: Laptop): Observable<Laptop[]> {
    return this.http.post<Laptop[]>(
      `${environment.apiUrl}/${this.url}`,
      laptop
    );
  }

  public updateLaptop(laptop: Laptop): Observable<Laptop[]> {
    return this.http.put<Laptop[]>(`${environment.apiUrl}/${this.url}`, laptop);
  }

  public deleteLaptop(laptop: Laptop): Observable<Laptop[]> {
    return this.http.delete<Laptop[]>(
      `${environment.apiUrl}/${this.url}/${laptop.id}`
    );
  }
}
