import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css',
})

export class ContactDetail {
  @Input() contact?: Contact;
}

