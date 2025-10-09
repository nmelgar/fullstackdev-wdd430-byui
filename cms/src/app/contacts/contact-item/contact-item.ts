import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})

export class ContactItem {
  @Input() contact!: Contact;
  @Output() contactSelected = new EventEmitter<Contact>();

  onClick() {
    this.contactSelected.emit(this.contact);
  }
}
