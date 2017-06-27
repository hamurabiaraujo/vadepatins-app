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
    r = {};
    
    r.id = 2;
    r.cod = 'QWE789';
    r.image = 'assets/img/rol/patins_verde_0.jpg';
    r.brand = 'Space';
    r.size = 42;
    r.model= 'Mega Legal ultra';
    
    this.rol.push(r);

    r = {};
    
    r.id = 3;
    r.cod = 'ASD123';
    r.image = 'assets/img/rol/patins_roza_infantil.jpg';
    r.brand = 'Space';
    r.size = 43;
    r.model= 'Mega giga ultra demais';
    
    this.rol.push(r);

    r = {};
    
    r.id = 4;
    r.cod = 'QWE779';
    r.image = 'assets/img/rol/patins_titanium_0.jpg';
    r.brand = 'Space';
    r.size = 41;
    r.model= 'Mega legal';
    
    this.rol.push(r);

    r = {};
    
    r.id = 5;
    r.cod = 'QWE129';
    r.image = 'assets/img/rol/patins_verde_1.jpg';
    r.brand = 'Space';
    r.size = 40;
    r.model= 'Mega patins irado';
    
    this.rol.push(r);

    r = {};
    
    r.id = 6;
    r.cod = 'QWE7129';
    r.image = 'assets/img/rol/patins_verde_0.jpg';
    r.brand = 'Space';
    r.size = 37;
    r.model= 'Super Fast';
    
    this.rol.push(r);
  }

  add(r: Rollerblade) {
    this.rol.push(r);
  }

  getRollerblades() {
    return this.rol;
  }

  query(params?: any) {
    if (!params) {
      return this.rol;
    }

    return this.rol.filter((r) => {
      for (let key in params) {
        let field = r[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return r;
        } else if (field == params[key]) {
          return r;
        }
      }
      return null;
    });
  }
}