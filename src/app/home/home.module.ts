import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LightComponent } from '../components/light/light.component';
import { AlarmeComponent } from '../components/alarme/alarme.component';
import { TemperatureControllerComponent } from '../components/temperature-controller/temperature-controller.component';
import { TermometroComponent } from '../components/termometro/termometro.component';
import { SwitchControllerComponent } from '../components/switch-controller/switch-controller.component';
import { FogaoComponent } from '../components/fogao/fogao.component';
import { FogaoControllerComponent } from '../components/fogao-controller/fogao-controller.component';
import {NgxElectronModule} from 'ngx-electron';
import {ScrollbarThemeModule} from '../directive/scrollbar.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxElectronModule,
    ScrollbarThemeModule
  ],
  declarations: [HomePage, LightComponent, AlarmeComponent, TemperatureControllerComponent, TermometroComponent, SwitchControllerComponent, FogaoComponent, FogaoControllerComponent]
})
export class HomePageModule {}
