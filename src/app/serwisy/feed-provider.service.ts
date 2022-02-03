import { Injectable } from '@angular/core';
import * as rssParser from 'react-native-rss-parser';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  constructor() { }

  public fetchData(): void{
    fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
    });
  }
}
