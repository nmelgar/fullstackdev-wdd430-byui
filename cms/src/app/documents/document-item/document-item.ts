import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-item',
  imports: [RouterLink],
  templateUrl: './document-item.html',
  styleUrl: './document-item.css',
})
export class DocumentItem {
  @Input() document!: Document;
}
