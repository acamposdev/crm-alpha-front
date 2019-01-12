import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  @Input() customer: any;
  @Input() form: any[];

  constructor() { }

  ngOnInit() {
  }

}
