import { Injectable } from '@angular/core';
import { Quizz, Question } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  constructor() { }

  create(name: string) {
    const q = new Quizz();
    q.name = name;
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
    localStorage.setItem('current', JSON.stringify(q));
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
    return Object.keys(this.getQuizzList()).length > 0;
  }
}
