import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../models/Book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private simpleUrlBook = '/api/book/';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    const url = `${this.simpleUrlBook}`;
    return this.http.get<Book[]>(url);
  }

  countByGenre(genre: string): Observable<number> {
    const url = `${this.simpleUrlBook}/task5/${genre}`;
    return this.http.get<number>(url);
  }

}
