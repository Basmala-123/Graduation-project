import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './books/book/book.component';
import { AdminFunctionComponent } from './admin/admin-function/admin-function.component';
import { AuthorComponent } from './author/author/author.component';
import { ArticleComponent } from './articles/article/article.component';
import { CategoryComponent } from './categories/category/category.component';
import { UserComponent } from './users/user/user.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'signup' , pathMatch:'full'},
  
  {path:'signup', component:SignUpComponent},
  {path:'home' , canActivate:[AuthGuard],  component:HomeComponent},
  {path:'books' , canActivate:[AuthGuard] ,  component:BookComponent},
  {path:'admin' ,  component:SignUpComponent},
  {path:'login' ,  component:LogInComponent},
  {path:'author'  , canActivate:[AuthGuard], component:AuthorComponent},
  {path:'article' , canActivate:[AuthGuard] , component:ArticleComponent},
  {path:'category' , canActivate:[AuthGuard], component:CategoryComponent},
  {path:'user' , canActivate:[AuthGuard], component:UserComponent},
  // {path:'login', component:LogInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
