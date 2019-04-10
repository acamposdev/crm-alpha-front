
import { throwError as observableThrowError,  Observable ,  Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { END_POINT } from '../config/config';

import { Case } from '../models/case';
import { PopupMessageService } from '../components/popup-message/popup-message.service';

@Injectable()
export class CasesService {
  private $cases: Subject<Case[]> = new Subject<Case[]>();

  constructor(
    private http: HttpClient,
    private popupMessage: PopupMessageService
  ) {
    console.log('CasesService - constructor');
  }

  loadCases(customerId: string) {
    return this.http.get(END_POINT + 'api/v1/cases?customerId=' + customerId);
  }

  loadCase(caseId: any) {
    return this.http.get(END_POINT + 'api/v1/cases/' + caseId);
  }

  save(caseToSave: Case) {
    return this.http.post(END_POINT + 'api/v1/cases', caseToSave).pipe(

      map((result) => {
        this.loadCases(caseToSave.customerId).subscribe((cases: Case[]) => {
          this.setCases(cases);
          this.popupMessage.popup('success', 'Caso guardado corectamente!');
        });
      }),

      catchError(err => {
        this.popupMessage.popup('danger', err.message);
        return observableThrowError(err);
      })

    );
  }

  setCases(cases: Case[]) {
    this.$cases.next(cases);
  }

  getCasesObservable(): Observable<Case[]> {
    return this.$cases.asObservable();
  }
}
