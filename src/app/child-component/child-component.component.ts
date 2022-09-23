import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() public parentData: any;

  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  showEvent() {
    this.childEvent.emit('Hi Everyone from child component');
  }
}
