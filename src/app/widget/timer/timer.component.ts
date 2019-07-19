import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() init = 60;

  @Output() timerTimeout = new EventEmitter<string>(false);

  count = this.init;

  constructor() { }

  ngOnInit() {
  }

}
