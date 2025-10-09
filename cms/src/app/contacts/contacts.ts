import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact.model';
import { ContactList } from './contact-list/contact-list';
import { ContactDetail } from './contact-detail/contact-detail';

@Component({
  selector: 'app-contacts',
  imports: [ContactList, ContactDetail, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  selectedContact?: Contact;
}
