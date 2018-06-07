import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Material Component
import { MatExpansionModule } from '@angular/material/expansion';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

// Service import for usage
import {DashreportService} from '../services/dashreport.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DronedashComponent } from './dronedash/dronedash.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DronedashComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  HttpClientModule
  ],
  exports:[
    MatExpansionModule,
    MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
  ],
  providers: [DashreportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
