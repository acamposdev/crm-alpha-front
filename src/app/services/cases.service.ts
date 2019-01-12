import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { END_POINT } from '../config/config';

import { Case } from '../models/case';
import { Observable } from 'rxjs/Observable';
import { PopupMessageService } from '../components/popup-message/popup-message.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CasesService {
  private $cases: Subject<Case[]> = new Subject<Case[]>();

  constructor(
    private http: HttpClient,
    private popupMessage: PopupMessageService
  ) {
  }

  loadCases(customerId: string) {
    return this.http.get(END_POINT + 'api/v1/cases?customerId=' + customerId);
  }

  loadCase(caseId: any) {
    return this.http.get(END_POINT + 'api/v1/cases/' + caseId);
  }

  save(caseToSave: Case) {
    return this.http.post(END_POINT + 'api/v1/cases', caseToSave)
    .map((result) => {
      this.loadCases(caseToSave.customerId).subscribe((cases: Case[]) => {
        this.setCases(cases);
      });
    })
    .catch(err => {
      this.popupMessage.popup('danger', err.message);
      return Observable.throw(err);
    });
  }

  setCases(cases: Case[]) {
    this.$cases.next(cases);
  }

  getCasesObservable(): Observable<Case[]> {
    return this.$cases.asObservable();
  }
}
