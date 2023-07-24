import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent {
  @ViewChild('chatScroll') chatScroll!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('textarea') textarea!: ElementRef<HTMLTextAreaElement>;
  constructor() {}
  message = '';
  chatMessages: string[][] = [];
  sendMessage() {
    if (this.message) {
      const chatMessage: string[] = ['user', this.message];
      console.log(this.message);
      this.message = '';
      this.chatMessages.push(chatMessage);
      this.chatScroll.nativeElement.scrollTop =
        this.chatScroll.nativeElement.scrollHeight;
      if (this.textarea) {
        this.textarea.nativeElement.blur();
      }
    }
  }
}
