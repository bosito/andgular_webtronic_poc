import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public counter = 10;
  public shouldAddPoint = false

  public changeValueNUmber(){
    this.counter = this.counter * 10
  }

  public addPoint() {
    this.shouldAddPoint = !this.shouldAddPoint
  }
}
