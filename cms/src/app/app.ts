import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { Contacts } from './contacts/contacts';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactItem } from './contacts/contact-item/contact-item';
import { Documents } from './documents/documents';
import { Messages } from './messages/messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Contacts, Documents, Messages],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cms');
  selectedFeature = signal<string>('documents');
  switchView(selectedFeature: string): void {
    console.log('AppComponent: Switching view to:', selectedFeature);
    this.selectedFeature.set(selectedFeature);
  }
}
