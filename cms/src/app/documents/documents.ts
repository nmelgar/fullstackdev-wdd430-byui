import { Component } from '@angular/core';
import { Document } from './document.model';
import { DocumentList } from './document-list/document-list';
import { DocumentDetail } from './document-detail/document-detail';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [DocumentDetail, DocumentList],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {
  selectedDocument: Document | undefined;

  onDocumentSelected(document: Document) {
    this.selectedDocument = document;
    console.log('Document Selected:', this.selectedDocument.name);
  }
}
