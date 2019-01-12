import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit, OnDestroy {
  public text: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('Antes de que se borre el componnte ' + this.text);
  }
}
