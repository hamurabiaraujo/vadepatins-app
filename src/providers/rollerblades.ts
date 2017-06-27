import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Rollerblade } from '../models/rollerblade';

@Injectable()
export class Rollerblades {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/rollerblades', params)
      .map(resp => resp.json());
  }

  add(item: Rollerblade) {
  }

  delete(item: Rollerblade) {
  }

}
