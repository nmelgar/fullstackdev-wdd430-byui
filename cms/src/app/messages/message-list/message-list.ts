import { Component } from '@angular/core';
import { MessageEdit } from '../message-edit/message-edit';
import { MessageItem } from '../message-item/message-item';

@Component({
  selector: 'app-message-list',
  imports: [MessageEdit, MessageItem],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {}
