import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HighchartsChartModule } from 'highcharts-angular';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/books-list.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { BooksEffects } from './state/books.effects';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ScriptsComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([BooksEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
