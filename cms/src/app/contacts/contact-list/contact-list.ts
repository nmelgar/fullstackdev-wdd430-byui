import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactItem } from '../contact-item/contact-item';

@Component({
  selector: 'app-contact-list',
  imports: [ContactItem],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  contacts: Contact[] = [
    new Contact(
      '234',
      'John Doe',
      'qwer@gmail.com',
      '801-555-5555',
      'https://www.w3schools.com/howto/img_avatar.png'
    ),

    new Contact(
      '234',
      'John Does',
      'qwer@gmail.com',
      '801-555-5555',
      'https://www.w3schools.com/howto/img_avatar.png'
    ),
  ];
}
