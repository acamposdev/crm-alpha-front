import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../app/services/customers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  public customers: any[];

  constructor(
    public customerService: CustomerService
  ) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  loadCustomers() {
    this.customerService.loadCustomers().subscribe((items: any) => {
      console.log('SearchComponent - loadCustomers');
      this.customers = [...items];
      this.customerService.setCustomers(items);
    });
  }
}
