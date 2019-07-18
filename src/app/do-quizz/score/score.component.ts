import { Component, OnInit } from '@angular/core';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';
import { QuizzService } from 'src/app/quizz.service';
import { QuizzProgress } from 'src/app/quizz-progress';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  faSmileWink = faSmileWink;
  q = this.quizz.getCurrent();
  p: QuizzProgress = this.quizz.getProgress();
  constructor(private quizz: QuizzService) { }

  ngOnInit() {
  }

}
