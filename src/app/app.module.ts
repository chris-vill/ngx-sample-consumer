import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleModule } from "ngx-simple-component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
