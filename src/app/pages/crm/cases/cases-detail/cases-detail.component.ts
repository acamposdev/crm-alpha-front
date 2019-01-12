import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasesService } from '../../../../services/cases.service';
import { Case } from '../../../../models/case';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopupMessageComponent } from '../../../../components/popup-message/popup-message.component';
import { PopupMessageService } from '../../../../components/popup-message/popup-message.service';

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
      this.activatedRoute.params.subscribe((params: any) => {
        this.caseId = params.caseId;
      });
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


    if (this.caseId !== 'new') {
      this.caseService.loadCase(this.caseId).subscribe((result: any) => {
        this.case = result;
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
      });
    }
  }

  save() {
    this.caseService.save(this.form.value).subscribe(result => {
      this.popupMessageService.popup('success', 'Caso guardado corectamente!');
    });
  }
}
