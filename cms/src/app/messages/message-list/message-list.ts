import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageEdit } from '../message-edit/message-edit';
import { MessageItem } from '../message-item/message-item';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  imports: [CommonModule, MessageEdit, MessageItem],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
    messages: Message[] = [
    new Message(1, 'Hello', 'hellllllooooo?', 'Me'),
    new Message(2, 'Reminder', 'Hey this is a reminder.', 'You'),
    new Message(3, 'Greetings', 'Greeeetings', 'We')
  ];

  // method to add message to array
  onAddMessage(message: Message) {
    this.messages.push(message);
    console.log('Message added:', message);
  }
}
