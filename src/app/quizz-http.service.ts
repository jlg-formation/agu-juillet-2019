import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuizzService } from './quizz.service';
import { Quizz } from './quizz';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    this.http.get(environment.serverUrl).subscribe({
      next: list => {
        console.log('next', list);
        localStorage.setItem('list', JSON.stringify(list));
    },
      error: e => console.error('error', e),
      complete: () => console.log('complete'),
    });
  }

  storeQuizz(q: Quizz) {
    super.storeQuizz(q);
    this.http.post(environment.serverUrl, this.getQuizzList()).subscribe({
      next: x => { console.log('next', x); },
      error: e => console.error('error', e),
      complete: () => console.log('complete'),
    });
  }
}
