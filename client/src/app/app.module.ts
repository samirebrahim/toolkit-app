import { AppRoutingModule } from './app.routing.module';
import { ToolkitModule } from './toolkit/toolkit.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
        HttpModule,
        HttpClientModule,
    AppRoutingModule,
    ToolkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
