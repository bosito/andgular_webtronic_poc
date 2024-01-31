import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';
import { CounterModule } from '../counter/counter.module';
import { CapitalizePipe } from './capitalize/capitalize.pipe';

@NgModule({
  declarations: [SidebarComponent],
  imports: [BrowserModule, CounterModule, CapitalizePipe],
  providers: [],
  bootstrap: [],
  exports: [SidebarComponent]
})
export class SidebarModule {}
