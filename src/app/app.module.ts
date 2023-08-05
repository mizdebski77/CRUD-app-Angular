import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { HomeComponent } from './features/home/home';
import { FormComponent } from './features/form/form';
import { RoutingModule } from './common/router';
import { HeaderComponent } from './features/form/header/header';
import { DataFormComponent } from './features/form/data-form/data-form';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './features/form/list/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    HeaderComponent,
    DataFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
