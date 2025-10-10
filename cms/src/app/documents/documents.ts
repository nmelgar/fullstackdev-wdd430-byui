import { Component } from '@angular/core';
import { DocumentDetail } from './document-detail/document-detail';
import { DocumentList } from './document-list/document-list';

@Component({
  selector: 'app-documents',
  imports: [DocumentDetail, DocumentList],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {}
