import { Component } from '@angular/core';
import { Document } from './document.model';
import { DocumentList } from './document-list/document-list';
import { DocumentDetail } from './document-detail/document-detail';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [DocumentDetail, DocumentList],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {
  selectedDocument: Document | undefined;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.documentSelectEvent.subscribe((document: Document) => {
      this.selectedDocument = document;
    });
  }
}
