import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscriber, Observer } from 'rxjs';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() init = 60;

  @Output() timerTimeout = new EventEmitter<string>(false);

  obs: Observable<number>;

  constructor() {
    this.obs = new Observable<number>((observer: Observer<number>) => {
      (async () => {
        let count = this.init;
        observer.next(count);
        while (count > 0) {
          await sleep(1000);
          count--;
          observer.next(count);
        }
        observer.complete();
      })();
    });
  }

  ngOnInit() {
  }

}
