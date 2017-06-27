import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';


import { Rollerblade } from "../../models/rollerblade";
import { Rollerblades } from "../../mocks/providers/rollerblades";
import { RollerbladeDetailPage } from "../rol-detail/rol-detail";


@Component({
  selector: 'rol-list',
  templateUrl: 'rol-list.html'
})
export class RollerbladeListPage {
  currentItems: Item[];
  rol: Rollerblade[];

  constructor(
    public navCtrl: NavController, 
    public items: Items,
    public rollerblades: Rollerblades
  ) {
    this.currentItems = this.items.query();
    this.rol = this.rollerblades.getRollerblades();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  openRollerblade(rol: Rollerblade) {
    this.navCtrl.push(RollerbladeDetailPage, {
      rol: rol
    });
  }
}
