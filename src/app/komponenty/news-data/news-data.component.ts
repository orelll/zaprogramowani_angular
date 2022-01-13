import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/serwisy/news.service';

@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: ['./news-data.component.css']
})
export class NewsDataComponent implements OnInit {

  @Input() newsData: string = undefined;

  constructor(private newService: NewsService) {
  }

  ngOnInit(): void {
  }

  closeNews():void{
    this.newService.setNewsData(undefined);
  }
}
