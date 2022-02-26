import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  template: `<div class="book-item" *ngFor="let book of books">
    <p>{{ book.volumeInfo.title }}</p>
    <span> by {{ book.volumeInfo.authors }}</span>
    <button (click)="remove.emit(book.id)" data-test="remove-button">
      Remove from Collection
    </button>
  </div>`,
})
export class BookCollectionComponent {
  @Input() books?: readonly Book[] | undefined = [];
  @Output() remove = new EventEmitter<string>();
}
