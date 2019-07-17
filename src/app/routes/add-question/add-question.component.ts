import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { Quizz } from 'src/app/quizz';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la France ?', Validators.required),
    answerA: new FormControl('Rome', Validators.required),
    answerB: new FormControl('Berlin', Validators.required),
    answerC: new FormControl('Paris', Validators.required),
    answerD: new FormControl('Londres', Validators.required),
    correctAnswer: new FormControl('C', Validators.required),
  });

  q: Quizz;
  constructor(private router: Router, private quizz: QuizzService) { }

  ngOnInit() {
    this.q = this.quizz.getCurrent();
    if (!this.q) {
      this.router.navigateByUrl('/');
    }
  }

  submit() {
    console.log('submit');
    this.quizz.addQuestion(this.f.value);
    this.router.navigateByUrl('/setup');
  }

}
