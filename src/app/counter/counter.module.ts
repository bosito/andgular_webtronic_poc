import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from '../counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [CounterComponent]
})
export class CounterModule {}
