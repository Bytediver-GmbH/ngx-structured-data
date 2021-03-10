import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StructuredDataModule} from "../../structured-data/structured-data.module";


@NgModule({
  imports: [
    BrowserModule,
    StructuredDataModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
