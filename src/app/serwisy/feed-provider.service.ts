import { Injectable } from '@angular/core';
import * as rssParser from 'react-native-rss-parser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {
  feeds: any[] = [];

  constructor() { }

 fetchData():Promise<any>{
  return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    console.log(rss.title);
    this.feeds = rss;
    return rss;
  });
 }

}
