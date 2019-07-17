import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Quizz } from 'src/app/quizz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  q: Quizz;
  constructor(private quizz: QuizzService, private router: Router) { }

  ngOnInit() {
    this.q = this.quizz.getCurrent();
    if (!this.q) {
      this.router.navigateByUrl('/');
    }
  }

  finish() {
    this.quizz.storeQuizz(this.q);
    this.router.navigateByUrl('/finished');
  }

}
