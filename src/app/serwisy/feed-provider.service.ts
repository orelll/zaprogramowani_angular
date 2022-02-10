import { Injectable } from '@angular/core';
import * as rssParser from 'react-native-rss-parser';
import { RssFeedData } from '../classes/rss-feed-data';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {

  constructor() { }

  public async fetchData(): Promise<RssFeedData[]> {
    return await fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
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
