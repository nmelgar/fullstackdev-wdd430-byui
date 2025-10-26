import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactItem } from '../contact-item/contact-item';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  imports: [ContactItem],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css'],
})
export class ContactList implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  onSelectContact(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
