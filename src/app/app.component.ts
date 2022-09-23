import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-interaction';
  public name = 'from parent';
  public message = '';

  list: any[] = [];

  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
  }
}
