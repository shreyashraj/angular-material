import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path : 'home', component : HomeComponent},
  { path: 'user', component: UserComponent },
  {path : '', component : HomeComponent},
  {path : '**', component : ErrorComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }