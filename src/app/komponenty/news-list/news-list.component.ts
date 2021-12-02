import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public newsList: string[] = ['test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4','test_1', 'test_2', 'test_3', 'test_4',];
  public shouldBeMaximized: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeSize():void {
    console.log('hello from parent!');
    this.shouldBeMaximized = false;
  }
}
