import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HocVienComponent } from './hoc-vien/hoc-vien.component';
import { RoundPipe } from './round.pipe'
import { DatePipe } from './date.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HocVienComponent,
    RoundPipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
