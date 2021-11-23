import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements OnInit {

  @Input() newsName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
