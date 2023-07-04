import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookCardComponent } from './components/book-card/book-card.component';
import { SwipperComponent } from './components/swipper/swipper.component';
import { SummerizeModalComponent } from './components/summerize-modal/summerize-modal.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    SwipperComponent,
    SummerizeModalComponent, 

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    [SwiperModule],
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BookCardComponent,
    SwipperComponent,
    SummerizeModalComponent

  ]
})
export class SharedModule { }
