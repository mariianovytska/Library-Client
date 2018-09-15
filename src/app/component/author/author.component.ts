import {Component, OnInit} from '@angular/core';
import {Author} from '../../models/Author';
import {AuthorService} from '../../service/author.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  allAuthors: Author[];

  id: string;

  constructor(private authorService: AuthorService,
              private route: ActivatedRoute) {}

  ngOnInit() {
     this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAllAuthors().subscribe(authors => {
      this.allAuthors = authors;
    });
  }

  getAuthorsOlder55() {
    this.authorService.getAuthorsOlder55().subscribe(authors => {
      this.allAuthors = authors;
    });
  }

  getAuthorsHavingMoreThen1Book() {
    this.authorService.getAuthorsHavingMoreThen1Book().subscribe(authors => {
      this.allAuthors = authors;
    });
  }

  getAuthorsHavingMaxBooks() {
    this.authorService.getAuthorsHavingMaxBooks().subscribe(authors => {
      this.allAuthors = authors;
    });
  }
}
