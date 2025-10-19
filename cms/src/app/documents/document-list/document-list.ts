import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentItem } from '../document-item/document-item';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  imports: [DocumentItem],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document('1', 'Document 1', 'Document 1 Details.', 'Document 1 URL', []),
    new Document('1', 'Document 2', 'Document 2 Details.', 'Document 2 URL', []),
    new Document('1', 'Document 3', 'Document 3 Details.', 'Document 3 URL', []),
    new Document('1', 'Document 4', 'Document 4 Details.', 'Document 4 URL', []),
    new Document('1', 'Document 5', 'Document 5 Details.', 'Document 5 URL', []),
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
