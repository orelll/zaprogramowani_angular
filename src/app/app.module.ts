import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './komponenty/header/header.component';
import { NewsListComponent } from './komponenty/news-list/news-list.component';
import { NewsDataComponent } from './komponenty/news-data/news-data.component';
import { NewsThumbnailComponent } from './komponenty/news-dashboard/news-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    NewsDataComponent,
    NewsThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
