import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Boca } from '../../home/home.page';

export enum FogaoLevels {
  OFF = '0',
  LEVEL_1 = '1',
  LEVEL_2 = '2',
  LEVEL_3 = '3',
  LEVEL_4 = '4',

}

@Component({
  selector: 'app-fogao',
  templateUrl: './fogao.component.html',
  styleUrls: ['./fogao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FogaoComponent implements OnInit {

  @Input() public bocas: Boca[] = [];
  @Output() public activeBocaIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  changeValue(index: number) {
    // this.activeBocaIndex.emit(index);
    this.bocas[index].value = this.increaseValue(this.bocas[index].value);
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
