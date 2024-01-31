import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter-store-actions/counter.actions';

@Component({
  selector: 'app-counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls: ['./counter-store.component.css'],
  // standalone: true
})
export class CounterStoreComponent {
  observableCount$: Observable<number>;

  constructor(private store: Store<{ counterReducer: number }>) {
    // NOTE: counterReducer should be same that the name of the reducer 
    // cos you are selected the reducer
    this.observableCount$ = this.store.select('counterReducer') 
  }


  public incrementCounter() {
    this.store.dispatch(increment());
  }

  public decrementCounter() {
    this.store.dispatch(decrement());
  }

  public resetCounter() {
    this.store.dispatch(reset());
  }
}
