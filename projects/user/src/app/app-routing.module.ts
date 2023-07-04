import { LogInComponent } from './registration/log-in/log-in.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { BooksComponent } from './pages/books/books.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './books/profile/profile.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { BookReaderComponent } from './books/book-reader/book-reader.component'
import { GuardGuard } from './guard.guard';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
{path:'' , redirectTo:'home' , pathMatch:'full'},
{path:'home' , component: HomeComponent,canActivate: [GuardGuard]},
{path:'about' , component:AboutUsComponent},
{path:'books' , component:AllBooksComponent},
{path:'contact us' , component:ContactUsComponent},
{path:'login',component:LogInComponent},
{path:'signup', component:SignUpComponent},
{path:'book-detail/:id',component:BookDetailComponent},
{path:'reader',component:BookReaderComponent},
{path:'profile',component:ProfileComponent},
{path:'articles',component:ArticlesComponent},
{path:'**' , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
