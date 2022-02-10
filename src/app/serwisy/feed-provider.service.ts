import { Injectable } from '@angular/core';
import * as rssParser from 'react-native-rss-parser';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { RssFeedData } from '../classes/rss-feed-data';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  private allAddresses: string[] = [];

  constructor() { }

  public registerAddresses(addresses: string[]):void{
    this.allAddresses = addresses;
  }

  public async fetchAllData(): Promise<RssFeedData[]>{
    return await forkJoin(this.allAddresses.map(add => this.fetchData(add))).pipe(
      map(data => {
        return data.reduce((acc, val) => acc.concat(val))
      })
    ).toPromise();
  }

  public async fetchData(addressToLoad: string): Promise<RssFeedData[]> {
    return await fetch(addressToLoad)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        console.log(rss.title);
        console.log(rss.items.length);

        const feeds: RssFeedData[] = [];

        rss.items.forEach(feed => {
          const newFeed = new RssFeedData();
          newFeed.title = feed.title;
          newFeed.description = feed.description;
          newFeed.content = feed.content;
          newFeed.publicationDate = feed.published;
          newFeed.id = feed.id;

          newFeed.links = feed.links.map(link => link.url);
          newFeed.enclosures = feed.enclosures.map(enc => enc.url);
          newFeed.authors = feed.authors;
          newFeed.categories = feed.categories;

          feeds.push(newFeed);
        });

        return feeds;
      });
  }
}
