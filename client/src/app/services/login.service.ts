import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../models/SignUp';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  url = 'SignUp';
  LoggedUser: SignUp[] = [];

  loginValue: boolean = false;
  LoginName: string = 'Login';

  currentLoggedUser!: SignUp;

  public getUsers(): Observable<SignUp[]> {
    return this.http.get<SignUp[]>(`${environment.apiUrl}/${this.url}`);
  }

  public postUser(user: SignUp): Observable<SignUp[]> {
    return this.http.post<SignUp[]>(`${environment.apiUrl}/${this.url}`, user);
  }

  public updateUser(user: SignUp): Observable<SignUp[]> {
    return this.http.put<SignUp[]>(`${environment.apiUrl}/${this.url}`, user);
  }

  public deleteUser(user: SignUp): Observable<SignUp[]> {
    return this.http.delete<SignUp[]>(
      `${environment.apiUrl}/${this.url}/${user.email}`
    );
  }
}
