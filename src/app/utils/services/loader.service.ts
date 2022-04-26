import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading: Subject<boolean> = new Subject<boolean>();
  unSubscribe: Observable<any> = new Observable();

  constructor() {
    // this.isLoading.pipe(takeUntil(this.unSubscribe)).subscribe((data) => {
    //   this.isLoading.next(data);
    // });
  }

  updateLoader(value: boolean) {
    this.isLoading.next(value);
  }
}
