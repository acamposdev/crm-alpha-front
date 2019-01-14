import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customers.service';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styles: []
})
export class CrmComponent implements OnInit {
  public customer: any;
  public form: any[];
  private customerId: string;

  constructor(
    public customerService: CustomerService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.customerId = params.customerId;
    });

    if (this.customerId !== '') {
        this.loadCustomer(this.customerId);
    } else {
      this.customer = this.customerService.getCustomer().customer;
      this.form = this.customerService.getCustomer().form;
    }
  }

  loadCustomer(customerId: string) {
    this.customerService.loadCustomerById(customerId).subscribe((customer: any) => {
      this.customer = customer.customer;
      this.form = customer.form;
      this.customerService.setCustomer(customer);
    });
  }
}
