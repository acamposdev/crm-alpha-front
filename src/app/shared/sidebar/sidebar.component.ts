import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customers.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {
  public customerId = '';

  constructor(
    private customerService: CustomerService,
  ) {}

  ngOnInit() {
    this.customerService.getCustomerIdObservable().subscribe((data: string) => {
      this.customerId = data;
    });
  }
}
