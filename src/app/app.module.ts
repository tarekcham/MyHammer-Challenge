import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';

import { HttpModule } from "@angular/http";

import { DataService } from "./services/data.service";
import { JobDetailsComponent } from './components/job-details/job-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    JobDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
