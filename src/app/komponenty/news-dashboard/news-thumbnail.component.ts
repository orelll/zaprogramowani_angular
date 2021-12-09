import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-thumbnail',
  templateUrl: './news-thumbnail.component.html',
  styleUrls: ['./news-thumbnail.component.css']
})
export class NewsThumbnailComponent implements OnInit {

  @Input() newsName: string = '';
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSize(){
    this.onClick.emit(this.newsName);
  }
}
