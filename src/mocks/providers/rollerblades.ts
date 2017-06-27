import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Rollerblade } from '../../models/rollerblade';

@Injectable()
export class Rollerblades {
  rol: Rollerblade[] = [];

  constructor() {
    let r: any = {}; 
    r.id = 1;
    r.cod = 'ASD098';
    r.image = 'assets/img/rol/patins_mixxer_pink.jpg';
    r.brand = 'Cooler';
    r.size = 35;
    r.model = 'Super power legal';
    
    this.rol.push(r);

    r.id = 2;
    r.cod = 'QWE789';
    r.image = 'assets/img/rol/patins_verde_0.jpg';
    r.brand = 'Space';
    r.size = 41;
    r.model= 'Mega giga ultra';
    
    this.rol.push(r);
  }

  add(r: Rollerblade) {
    this.rol.push(r);
  }

  getRollerblades() {
    return this.rol;
  }
}