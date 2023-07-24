import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent {
  @ViewChild('chatScroll') chatScroll!: ElementRef;
  constructor() {}
  message = '';
  chatMessages: string[][] = [];
  sendMessage() {
    const chatMessage: string[] = ['user', this.message];
    console.log(this.message);
    this.message = '';
    this.chatMessages.push(chatMessage);
    this.chatScroll.nativeElement.scrollTop =
      this.chatScroll.nativeElement.scrollHeight;
  }
}
