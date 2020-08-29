import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppMaterial } from './app.material.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { PopupComponent } from './dashboard/popup/popup.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';
import { PopupComponent } from './dashboard/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardTwoComponent,
    PopupComponent,
    // PopupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterial,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    // DialogsModule,
    // ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
