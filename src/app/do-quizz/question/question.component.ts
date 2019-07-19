import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/quizz';
import { QuizzService } from 'src/app/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzProgress } from 'src/app/quizz-progress';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  answer = new FormControl('', Validators.required);
  timerValue = 10;
  q: Quizz;
  p: QuizzProgress = { questionId: 0, score: 0 };
  constructor(
    private quizz: QuizzService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.q = this.quizz.getQuizzList()[params.name];
      this.quizz.setCurrent(this.q);
      this.p = (+params.id === 1) ?
        this.quizz.initProgress() :
        this.quizz.getProgress();
    });
  }

  next() {
    // answer ckeck
    if (this.answer.value === this.q.questions[this.p.questionId].correctAnswer) {
      this.p.score++;
    }
    // last question ?
    this.p.questionId++;
    this.quizz.setProgress(this.p);
    if (this.p.questionId === this.q.questions.length) {
      this.router.navigate(['/', 'score']);
      return;
    }
    this.answer.reset();
    this.router.navigate(['/', this.q.name, 'question', this.p.questionId + 1]);
  }

}
