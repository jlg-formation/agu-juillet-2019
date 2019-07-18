import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/quizz';
import { QuizzService } from 'src/app/quizz.service';
import { ActivatedRoute } from '@angular/router';
import { QuizzProgress } from 'src/app/quizz-progress';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  q: Quizz;
  p: QuizzProgress = { questionId: 0, score: 0 };
  constructor(private quizz: QuizzService, private route: ActivatedRoute) {
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

}
