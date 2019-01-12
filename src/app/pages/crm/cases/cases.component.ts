import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from '../../../services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styles: []
})
export class CasesComponent implements OnInit {
  public customerId: string;
  public cases: any[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public casesService: CasesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.customerId = params.customerId;
    });

    this.loadCases(this.customerId);
  }

  loadCases(customerId: string) {
    this.casesService.loadCases(customerId).subscribe((cases: any) => {
      this.cases = cases;
      this.casesService.setCases(cases);
    });
  }
}
