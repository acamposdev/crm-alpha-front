import { Injectable } from '@angular/core';
import { PopupMessageComponent } from './popup-message.component';

@Injectable()
export class PopupMessageService {
  private popupMessage: PopupMessageComponent;
  private level: string;
  private message: string;

  constructor() { }

  add(popup: PopupMessageComponent) {
    this.popupMessage = popup;
  }

  /**
   * Method for display the message box
   * @param level info, warn, success, error
   * @param message content of message for popup
   */
  popup(level: string, message: string) {
    this.popupMessage.popup(level, message);
  }
}
