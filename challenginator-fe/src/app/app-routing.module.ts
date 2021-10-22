import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InsertComponent} from "./insert/insert.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'insert', component: InsertComponent},
  {path: 'details/:challengeId', component: DetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
