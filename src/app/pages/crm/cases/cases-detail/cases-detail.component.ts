import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { switchMap, tap } from 'rxjs/operators';
import { Case } from '../../../../../app/models/case';
import { CasesService } from '../../../../../app/services/cases.service';
import { PopupMessageService } from '../../../../../app/components/popup-message/popup-message.service';

@Component({
  selector: 'app-cases-detail',
  templateUrl: './cases-detail.component.html',
  styles: []
})
export class CasesDetailComponent implements OnInit {
  private caseId: string;
  private case: Case = new Case(null, null, null);
  public form: FormGroup;
  public customerId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private caseService: CasesService,
    private popupMessageService: PopupMessageService
  ) {
    this.activatedRoute.params.pipe(
      map((param: Params) => param.caseId),
      switchMap((caseId: string) => this.caseService.loadCase(caseId)),
      tap(this.onCaseLoad)
    ).subscribe();
  }

  ngOnInit() {
    // Init formGroup object
    this.form = new FormGroup({
      id:  new FormControl(null, Validators.required),
      ref: new FormControl(null, Validators.required),
      opendate: new FormControl(null, Validators.required),
      updatedate: new FormControl(null),
      finalizationdate: new FormControl(null),
      comments: new FormControl(null),
      customerId: new FormControl(null, Validators.required)
    });
  }

  save() {
    this.caseService.save(this.form.value).subscribe(result => {
      this.popupMessageService.popup('success', 'Caso guardado corectamente!');
    });
  }

  private onCaseLoad = (caseLoaded: Case) => {
    this.case = caseLoaded;
    this.customerId = this.case.customerId;

    this.form.setValue({
      id: this.case.id,
      ref: this.case.ref,
      opendate: this.case.opendate,
      updatedate: null,
      finalizationdate: this.case.finalizationdate,
      comments: this.case.comments,
      customerId: this.case.customerId
    });
  }
}

