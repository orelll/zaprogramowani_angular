import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private newsSubject: Subject<string>;
  private newsData$: Observable<string>;

  constructor() {
    this.newsSubject = new Subject<string>();
    this.newsData$ = this.newsSubject.asObservable();
  }

  getNewsData$(): Observable<string> {
    return this.newsData$;
  }

  setNewsData(newData: string): void{
    this.newsSubject.next(newData);
  }
}
