import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Highcharts from 'highcharts';

import { addBook, getBookList, removeBook } from '../state/books.actions';
import { selectBookCollection, selectBooks } from '../state/books.selectors';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css'],
})
export class ScriptsComponent implements OnInit {
  Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: 'line',
      },
    ],
  };
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection)!;

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getBookList());
  }
}
