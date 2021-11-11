import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChallengeListComponent } from './dashboard/challenge-list/challenge-list.component';
import { ChallengeItemComponent } from './dashboard/challenge-list/challenge-item/challenge-item.component';
import { InsertComponent } from './insert/insert.component';
import { DetailsComponent } from './details/details.component';
import { StatusbarComponent } from './dashboard/statusbar/statusbar.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ChallengeListComponent,
    ChallengeItemComponent,
    InsertComponent,
    DetailsComponent,
    StatusbarComponent,
    HistoryComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
