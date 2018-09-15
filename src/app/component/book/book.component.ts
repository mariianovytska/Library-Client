import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/Book';
import {BookService} from '../../service/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  allBooks: Book[];

  numberByGenre: number;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
    this.numberByGenre = 0;
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe(books => {
      this.allBooks = books;
    });
  }

  countByGenre(genre: string) {
    this.bookService.countByGenre(genre).subscribe(number => {
      this.numberByGenre = number;
    });
  }
}
