import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css',
})
export class DocumentDetail {
  @Input() document: Document | undefined;
}
