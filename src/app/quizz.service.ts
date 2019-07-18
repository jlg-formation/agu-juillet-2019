import { Injectable } from '@angular/core';
import { Quizz, Question } from './quizz';
import { QuizzProgress } from './quizz-progress';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  create(name: string) {
    const q = new Quizz();
    q.name = name;
    this.setCurrent(q);
  }

  setCurrent(q: Quizz) {
    localStorage.setItem('current', JSON.stringify(q));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (str === null) {
      return null;
    }
    const q = JSON.parse(str);
    q.__proto__ = Quizz.prototype;
    return q;
  }

  addQuestion(question: Question) {
    const q = this.getCurrent();
    q.questions.push(question);
    this.setCurrent(q);
  }

  storeQuizz(q: Quizz) {
    const list = this.getQuizzList();
    list[q.name] = q;
    localStorage.setItem('list', JSON.stringify(list));
  }

  getQuizzList() {
    const str = localStorage.getItem('list');
    if (str === null) {
      return {};
    }
    const list = JSON.parse(str);
    // tslint:disable-next-line: forin
    for (const p in list) {
      list[p].__proto__ = Quizz.prototype;
    }
    return list;
  }

  hasQuizz(): boolean {
    return this.getArray().length > 0;
  }

  getArray(): Quizz[] {
    return Object.values(this.getQuizzList());
  }

  initProgress(): QuizzProgress {
    const p: QuizzProgress = {
      questionId: 0,
      score: 0,
    };
    this.setProgress(p);
    return this.getProgress();
  }
  getProgress(): QuizzProgress {
    const str = localStorage.getItem('progress');
    if (str === null) {
      return null;
    }
    return JSON.parse(str);
  }

  setProgress(p: QuizzProgress) {
    localStorage.setItem('progress', JSON.stringify(p));
  }
}
