import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'Book';
  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(`${environment.apiUrl}/${this.url}`, book);
  }

  public updateBook(book: Book): Observable<Book[]> {
    return this.http.put<Book[]>(`${environment.apiUrl}/${this.url}`, book);
  }

  public deleteBook(book: Book): Observable<Book[]> {
    return this.http.delete<Book[]>(
      `${environment.apiUrl}/${this.url}/${book.id}`
    );
  }
}
