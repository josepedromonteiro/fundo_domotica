import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DEFAULT_TEMPERATURE } from '../termometro/termometro.component';
import { Boca } from '../../home/home.page';
import { FogaoLevels } from '../fogao/fogao.component';

@Component({
  selector: 'app-fogao-controller',
  templateUrl: './fogao-controller.component.html',
  styleUrls: ['./fogao-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FogaoControllerComponent implements OnInit {


  @Input() value: Boca;
  @Output() valueChange: EventEmitter<Boca> = new EventEmitter<Boca>();

  constructor() { }

  ngOnInit() {}

  changeValue(index: number) {
    // this.bocas[index].value = this.increaseValue(this.value.value);
  }

  increaseValue(value: FogaoLevels): FogaoLevels {
    if (value === FogaoLevels.OFF) {
      return FogaoLevels.LEVEL_1;
    }
    if (value === FogaoLevels.LEVEL_3) {
      return FogaoLevels.LEVEL_4;
    }
    if (value === FogaoLevels.LEVEL_1) {
      return FogaoLevels.LEVEL_2;
    }
    if (value === FogaoLevels.LEVEL_4) {
      return FogaoLevels.OFF;
    }
    if (value === FogaoLevels.LEVEL_2) {
      return FogaoLevels.LEVEL_3;
    }
  }

}
