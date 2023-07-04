import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BookReaderComponent } from './book-reader/book-reader.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    ProfileComponent,
    BookDetailComponent,
    AllBooksComponent,
    BookReaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    NgxPaginationModule,
    NgxExtendedPdfViewerModule
  ],
  exports:[
     ProfileComponent,
     BookDetailComponent,
     AllBooksComponent,
     BookReaderComponent

  ]
})
export class BooksModule { }
