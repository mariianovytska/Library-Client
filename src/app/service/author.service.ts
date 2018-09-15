import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Author} from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private simpleUrlAuthor = '/api/author/';

  constructor(private http: HttpClient) {
  }

  getAllAuthors(): Observable<Author[]> {
    const url = `${this.simpleUrlAuthor}`;
    return this.http.get<Author[]>(url);
  }

  getAuthorsOlder55(): Observable<Author[]> {
    const url = `${this.simpleUrlAuthor}/task2`;
    return this.http.get<Author[]>(url);
  }

  getAuthorsHavingMoreThen1Book(): Observable<Author[]> {
    const url = `${this.simpleUrlAuthor}/task3`;
    return this.http.get<Author[]>(url);
  }

  getAuthorsHavingMaxBooks(): Observable<Author[]> {
    const url = `${this.simpleUrlAuthor}/task4`;
    return this.http.get<Author[]>(url);
  }
}
