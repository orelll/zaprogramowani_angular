import { Component, OnInit } from '@angular/core';
import { FeedProviderService } from 'src/app/serwisy/feed-provider.service';
import { NewsService } from 'src/app/serwisy/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public newsList: string[] = ['test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4',];
  public shouldBeMaximized: boolean = true;

  constructor(private newService: NewsService,
    public feedProvider: FeedProviderService) {
      this.feedProvider.fetchData().then(data => {
        this.newsList = data.items;
      });
     }

  ngOnInit(): void {
  }

  changeSize(newsName: string):void {
    console.log('hello from parent!');
    this.shouldBeMaximized = false;
    this.newService.setNewsData(newsName);
  }
}
