import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cloth } from '../models/Cloth';

@Injectable({
  providedIn: 'root',
})
export class ClothService {
  url = 'Cloth';
  constructor(private http: HttpClient) {}

  public getClothes(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getCloth(id: number): Observable<Cloth> {
    return this.http.get<Cloth>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public addCloth(cloth: Cloth): Observable<Cloth[]> {
    return this.http.post<Cloth[]>(`${environment.apiUrl}/${this.url}`, cloth);
  }

  public updateCloth(cloth: Cloth): Observable<Cloth[]> {
    return this.http.put<Cloth[]>(`${environment.apiUrl}/${this.url}`, cloth);
  }

  public deleteCloth(cloth: Cloth): Observable<Cloth[]> {
    return this.http.delete<Cloth[]>(
      `${environment.apiUrl}/${this.url}/${cloth.id}`
    );
  }
}
