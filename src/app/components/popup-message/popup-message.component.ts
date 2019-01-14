import { Component, OnInit } from '@angular/core';
import { PopupMessageService } from './popup-message.service';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styles: []
})
export class PopupMessageComponent implements OnInit {
  public message: string;
  public level: string;
  public show: string;
  public animation: string;

  constructor(
    private popupMessageService: PopupMessageService
  ) {}

  ngOnInit() {
    this.popupMessageService.add(this);
    this.animation = 'hide-popup';
    this.show = 'none';
  }
  popup(level: string, message: string) {
    this.level = level;
    this.message = message;
    this.animation = 'show-popup';
    this.show = 'show';

    setTimeout(() => {
      this.show = 'none';
      this.animation = 'hide-popup';
    }, 4000);
  }
}
