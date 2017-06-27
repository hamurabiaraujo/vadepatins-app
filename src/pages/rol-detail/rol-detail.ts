import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Rollerblades } from '../../mocks/providers/rollerblades';

@Component({
  selector: 'page-rollerblade-detail',
  templateUrl: 'rollerblade-detail.html'
})
export class RollerbladeDetailPage {
  rol: any;

  constructor(public navCtrl: NavController, navParams: NavParams, rollerblades: Rollerblades) {
    this.rol = navParams.get('rol');
  }

}
