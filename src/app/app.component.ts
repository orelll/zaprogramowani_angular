import { Component } from '@angular/core';
import { NewsService } from './serwisy/news.service';

@Component({
  selector: 'app-root-2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'lekcja 4';

  myArray: string[] = ['a', 'b', 'c'];
  public currentNews: string = undefined;

  constructor(private newService: NewsService) {
    console.log(this.myArray);

    newService.getNewsData$().subscribe((newsData: string) => {
      this.currentNews = newsData;
      console.log(`currentNews ${this.currentNews}`);
    });
  }
}
