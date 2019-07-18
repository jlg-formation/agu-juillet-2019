import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/quizz';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  q: Quizz = this.quizz.getCurrent();
  p = { id: 0 };
  constructor(private quizz: QuizzService) {
  }

  ngOnInit() {
  }

}
