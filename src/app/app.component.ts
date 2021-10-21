import { Component } from '@angular/core';

@Component({
  selector: 'app-root-2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'lekcja 4';

  myArray: string[] = ['a', 'b', 'c'];

  constructor() {
    console.log(this.myArray)
  }
}
