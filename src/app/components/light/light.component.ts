import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LightComponent implements OnInit {

  @Input() isTurnedOn = false;

  constructor() {
  }

  ngOnInit() {
  }

}
