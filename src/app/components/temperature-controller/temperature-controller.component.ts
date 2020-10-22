import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DEFAULT_TEMPERATURE } from '../termometro/termometro.component';

@Component({
  selector: 'app-temperature-controller',
  templateUrl: './temperature-controller.component.html',
  styleUrls: ['./temperature-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemperatureControllerComponent implements OnInit {

  @Input() value: number = DEFAULT_TEMPERATURE;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event: CustomEvent) {
    event.preventDefault();
    this.valueChange.emit(event.detail.value);
  }

}
