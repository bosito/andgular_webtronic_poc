import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Output()
  public newItemEvent = new EventEmitter<void>();

  public observableCount$: Observable<number>;

  constructor(private store: Store<{ counterReducer: number }>) {
    this.observableCount$ = this.store.select('counterReducer');
  }

  public handleChangeCounter() {
    this.newItemEvent.emit();
  }
}
