import { Component } from '@angular/core';
import { MessageList } from './message-list/message-list';

@Component({
  selector: 'app-messages',
  imports: [MessageList],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})

export class Messages {}
