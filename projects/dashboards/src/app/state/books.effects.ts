import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { GoogleBooksService } from '../book-list/books.service';
import { getBookList, retrievedBookList } from './books.actions';

@Injectable()
export class BooksEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBookList),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books) =>
            retrievedBookList({
              books,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}
}
