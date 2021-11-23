import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './komponenty/header/header.component';
import { NewsListComponent } from './komponenty/news-list/news-list.component';
import { NewsDataComponent } from './komponenty/news-data/news-data.component';
import { NewsDashboardComponent } from './komponenty/news-dashboard/news-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    NewsDataComponent,
    NewsDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
