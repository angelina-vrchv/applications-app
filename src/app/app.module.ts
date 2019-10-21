import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ApplicationItemComponent } from './components/application-item/application-item.component';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { FormsModule } from '@angular/forms';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    ApplicationItemComponent,
    AddApplicationComponent,
    EditApplicationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
