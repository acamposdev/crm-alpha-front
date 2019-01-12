import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styles: []
})
export class CasesListComponent implements OnInit {
  @Input() cases: any[];
  @Input() customerId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  loadCaseDetail(caseSelected: any) {
    this.router.navigate(['case-detail', caseSelected.id], {
      relativeTo: this.route
    });
  }
}
