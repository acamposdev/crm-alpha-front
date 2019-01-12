import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { END_POINT } from '../config/config';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  private state: boolean;
  private customer: any;
  private customers: any[];
  private customerIdSubject: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {}

  getCustomers() {
    return this.customers;
  }

  setCustomers(customers: any[]) {
    this.customers = customers;
  }

  loadCustomers() {
    return this.http.get(END_POINT + 'api/v1/customers');
  }

  loadCustomerById(customerId: string) {
    return this.http.get(END_POINT + 'api/v1/customers/' + customerId);
  }

  setCustomer(customer: any) {
    this.customer = customer;
    this.customerIdSubject.next(customer.customer.id);
  }

  getCustomer() {
    return this.customer;
  }


  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    return this.getState();
  }

  getCustomerIdObservable(): Observable<string> {
    return this.customerIdSubject.asObservable();
  }
}
