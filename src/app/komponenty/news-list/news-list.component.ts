import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/serwisy/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public newsList: string[] = ['test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4',];
  public shouldBeMaximized: boolean = true;

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
  }

  changeSize(newsName: string):void {
    console.log('hello from parent!');
    this.shouldBeMaximized = false;
    this.newService.setNewsData(newsName);
  }
}
