import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact.model';
import { ContactList } from './contact-list/contact-list';
import { ContactDetail } from './contact-detail/contact-detail';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  imports: [ContactList, ContactDetail, CommonModule],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css'],
})
export class Contacts implements OnInit {
  selectedContact?: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe((contact: Contact) => {
      this.selectedContact = contact;
    });
  }
}
