import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { TranslateService } from "@ngx-translate/core";

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { Rollerblade } from '../../models/rollerblade';
import { Rollerblades } from '../../mocks/providers/rollerblades';
import { RollerbladeDetailPage } from "../rol-detail/rol-detail";


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentItems: any = [];
  rol: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rollerblades: Rollerblades) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.rol = [];
      return;
    }
    this.rol = this.rollerblades.query({
      model: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(rol: Rollerblade) {
    this.navCtrl.push(RollerbladeDetailPage, {
      rol: rol
    });
  }

}
