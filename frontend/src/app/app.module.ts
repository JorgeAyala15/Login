import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    SingInComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
