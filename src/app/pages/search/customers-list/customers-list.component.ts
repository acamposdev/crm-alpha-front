import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styles: []
})
export class CustomersListComponent implements OnInit {
  @Input() state: boolean;
  @Input() customers: any[] = [];

  constructor(
    public router: Router,
    public customerService: CustomerService
  ) {
  }

  ngOnInit() {
  }

  loadCustomer(customer: any) {
    console.log(customer);
    this.router.navigate(['/crm', customer.id]);
  }
}
