import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.component.html',
  styleUrls: ['./alarme.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlarmeComponent implements OnInit {

  @Input() isTurnedOn = false;

  constructor() {
  }

  ngOnInit() {
  }

}
