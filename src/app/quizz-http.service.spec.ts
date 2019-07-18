import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuizzHttpService } from './quizz-http.service';
import { environment } from 'src/environments/environment';

describe('QuizzHttpService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const dummyQuizzList = {};
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    const req = httpMock.expectOne(environment.serverUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyQuizzList);
    expect(service).toBeTruthy();
  });

  it('should be test the 400 error', () => {
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    const req = httpMock.expectOne(environment.serverUrl);
    expect(req.request.method).toBe('GET');
    req.flush('', { status: 400, statusText: 'Bad Request' });
    expect(service).toBeTruthy();
  });
});
