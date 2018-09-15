import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BookComponent} from './component/book/book.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AuthorComponent} from './component/author/author.component';
import {HomeComponent} from './component/home/home.component';

const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path: 'authors', component: AuthorComponent},
  {path: 'task2', component: AuthorComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
