import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppMaterial } from './app.material.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupComponent } from './dashboard/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
