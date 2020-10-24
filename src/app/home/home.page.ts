import { Component, ViewEncapsulation } from '@angular/core';
import { DEFAULT_TEMPERATURE } from '../components/termometro/termometro.component';
import { FogaoLevels } from '../components/fogao/fogao.component';
import {ElectronService} from "ngx-electron";

export type DElement = 'light' | 'fogao' | 'alarm' | 'termometro';
export type DController = 'range' | 'switch' | 'buttons';

export interface Boca {
  value?: FogaoLevels;
}

export interface DivisionElement {
  // id: string;
  type: DElement;
  controller?: {
    value?: boolean | number;
    type: DController;
    isShowing: boolean;
  };
  class?: string[];
  bocas?: Boca[];
  activeBocaIndex?: number;
}

export interface Division {
  name: string;
  class: string;
  showControlCenter: boolean;
  elements?: {
    [key: string]: DivisionElement
  };
}

export interface Home {
  divisions: {
    [key: string]: Division;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  public home: Home;
  public showRestore: boolean = false;

  constructor(private electronService: ElectronService) {
    this.home = {
      divisions: {
        wc: {
          class: 'wc',
          name: 'WC',
          showControlCenter: false,
          elements: {
            light: {
              type: 'light',
              class: ['is-50'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            alarm: {
              type: 'alarm',
              class: ['is-50'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            }
          }
        },
        sala: {
          class: 'sala',
          name: 'Sala',
          showControlCenter: false,
          elements: {
            light: {
              type: 'light',
              class: ['is-33'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            alarm: {
              type: 'alarm',
              class: ['is-33'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            termometro: {
              class: ['is-33'],
              type: 'termometro',
              controller: {
                type: 'range',
                isShowing: false,
                value: 23
              }
            }
          }
        },
        quarto: {
          class: 'quarto',
          name: 'Quarto',
          showControlCenter: false,
          elements: {
            light: {
              type: 'light',
              class: ['is-33'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            alarm: {
              type: 'alarm',
              class: ['is-33'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            termometro: {
              class: ['is-33'],
              type: 'termometro',
              controller: {
                type: 'range',
                isShowing: false,
                value: 19
              }
            }
          }
        },
        cozinha: {
          class: 'cozinha',
          name: 'Cozinha',
          showControlCenter: false,
          elements: {
            termometro: {
              class: ['is-25'],
              type: 'termometro',
              controller: {
                type: 'range',
                isShowing: false,
                value: DEFAULT_TEMPERATURE
              }
            },
            light: {
              type: 'light',
              class: ['is-25'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            alarm: {
              type: 'alarm',
              class: ['is-25'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            fogao: {
              class: ['is-25'],
              type: 'fogao',
              controller: {
                type: 'buttons',
                isShowing: false
              },
              bocas: [
                {
                  value: FogaoLevels.OFF
                },
                {
                  value: FogaoLevels.LEVEL_1
                },
                {
                  value: FogaoLevels.LEVEL_2
                },
                {
                  value: FogaoLevels.LEVEL_3
                }
              ]
            }
          }
        },
        escada: {
          class: 'escada',
          name: 'Escada',
          showControlCenter: false,
          elements: {
            light: {
              type: 'light',
              class: ['is-50'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            },
            alarm: {
              type: 'alarm',
              class: ['is-50'],
              controller: {
                type: 'switch',
                isShowing: false,
                value: false
              }
            }
          }
        },
      }
    };
  }

  getKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  clickSensor(divisionKey: string, sensorId: string) {

    if (this.home.divisions[divisionKey].elements[sensorId].type !== 'termometro') {
      this.home.divisions[divisionKey].elements[sensorId].controller.value =
        !this.home.divisions[divisionKey].elements[sensorId].controller.value;
      return;
    }
    const isShowing: boolean = !this.home.divisions[divisionKey].elements[sensorId].controller?.isShowing;
    if (isShowing) {
      const sensors: string[] = this.getKeys(this.home.divisions[divisionKey].elements);
      sensors.forEach((sensorKey: string) => {
        if (this.home.divisions[divisionKey].elements[sensorKey].controller) {
          this.home.divisions[divisionKey].elements[sensorKey].controller.isShowing = false;
        }
        if (sensorKey !== sensorId) {
          this.home.divisions[divisionKey].elements[sensorKey].class.push('decrease');
        }
      });
      this.home.divisions[divisionKey].showControlCenter = true;
      this.home.divisions[divisionKey].elements[sensorId].class.push('increase');
    } else {
      this.home.divisions[divisionKey].showControlCenter = false;
      const sensors: string[] = this.getKeys(this.home.divisions[divisionKey].elements);
      sensors.forEach((sensorKey: string) => {
        const position = this.home.divisions[divisionKey].elements[sensorKey].class.findIndex((c: string) => c === 'decrease');
        const position2 = this.home.divisions[divisionKey].elements[sensorKey].class.findIndex((c: string) => c === 'increase');
        if (position !== -1) {
          this.home.divisions[divisionKey].elements[sensorKey].class.splice(position, 1);
        }

        if (position2 !== -1) {
          this.home.divisions[divisionKey].elements[sensorKey].class.splice(position2, 1);
        }
      });
    }
    if (this.home.divisions[divisionKey].elements[sensorId].controller) {
      this.home.divisions[divisionKey].elements[sensorId].controller.isShowing = isShowing;
    }
  }

  minus(){
    this.electronService.remote.BrowserWindow.getFocusedWindow().minimize();
  }

  // plus(){
  //
  //   if(this.electronService.remote.BrowserWindow.getFocusedWindow().isMaximized() || this.electronService.remote.BrowserWindow.getFocusedWindow().isFullScreen()){
  //     this.electronService.remote.BrowserWindow.getFocusedWindow().restore();
  //     this.showRestore = false;
  //     return;
  //   }
  //   this.electronService.remote.BrowserWindow.getFocusedWindow().fullScreen();
  //   this.showRestore = true;
  // }

  close(){
    this.electronService.remote.getCurrentWindow().close();
  }
}

