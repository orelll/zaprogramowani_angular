import { Component, OnInit } from '@angular/core';
import { RssFeedData } from 'src/app/classes/rss-feed-data';
import { FeedProviderService } from 'src/app/serwisy/feed-provider.service';
import { NewsService } from 'src/app/serwisy/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public newsList: RssFeedData[] = [];//['test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4',];
  public shouldBeMaximized: boolean = true;

  private addresses = ['https://gadgets.ndtv.com/rss/feeds', 'http://www.nasa.gov/rss/dyn/breaking_news.rss'];

  constructor(private newService: NewsService,
    public feedProvider: FeedProviderService) {
      feedProvider.registerAddresses(this.addresses);
      feedProvider.fetchAllData()
      .then(data => {
        this.newsList = data;
      })
      .catch(
        err => {

        }
      );
    }

  ngOnInit(): void {
  }

  changeSize(newsName: string):void {
    console.log('hello from parent!');
    this.shouldBeMaximized = false;
    this.newService.setNewsData(newsName);
  }
}
