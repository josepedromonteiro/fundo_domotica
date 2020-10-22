import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export const DEFAULT_TEMPERATURE = 16;
@Component({
  selector: 'app-termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TermometroComponent implements OnInit {

  @Input() temperature: number = DEFAULT_TEMPERATURE;
  constructor() { }

  ngOnInit() {}

}
