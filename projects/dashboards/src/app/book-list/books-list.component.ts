import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  template: `<div class="book-item" *ngFor="let book of books">
    <p>{{ book.volumeInfo.title }}</p>
    <span> by {{ book.volumeInfo.authors }}</span>
    <button (click)="add.emit(book.id)" data-test="add-button">
      Add to Collection
    </button>
  </div>`,
})
export class BookListComponent {
  @Input() books?: readonly Book[] | undefined = [];
  @Output() add = new EventEmitter<string>();
}
