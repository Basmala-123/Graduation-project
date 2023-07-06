import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BooksModule } from './books/books.module';
import { RegistrationModule } from './registration/registration.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { Observable } from 'rxjs';


@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'OPTIONS') {
      request = request.clone({
        headers: request.headers.delete('Authorization')
      });
    }
    return next.handle(request);
  }
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BooksModule,
    PagesModule,
    RegistrationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
