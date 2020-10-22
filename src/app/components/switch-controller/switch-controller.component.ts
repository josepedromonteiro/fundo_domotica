import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-switch-controller',
  templateUrl: './switch-controller.component.html',
  styleUrls: ['./switch-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchControllerComponent implements OnInit {

  @Input() value = false;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event: CustomEvent){
    event.preventDefault();
    this.valueChange.emit(event.detail.checked);
  }

}
