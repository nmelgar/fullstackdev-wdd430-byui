import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { Contacts } from './contacts/contacts';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactItem } from './contacts/contact-list/contact-item/contact-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Contacts, ContactDetail, ContactList, ContactItem, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cms');
}
