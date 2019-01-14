import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: []
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() public limit: number = 1;
  @Input() public data: any[] = [];
  @Input() public cols: any[] = [];
  @Output() public itemSelection = new EventEmitter();

  public offset: number = 0;
  public pages: number = 1;

  public header: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.data) {
      this.pages = (this.limit > this.data.length) ? 1 : this.data.length / this.limit;

      this.calculateHeaders(this.data);
    }
  }

  clickItem(item: any) {
    this.itemSelection.emit(item);
  }

  private calculateHeaders(data: any[]) {

    if (data.length === 0) {
      return this.header = [];
    }

    this.header = this.cols || Object.keys(data[0]);
  }
}
