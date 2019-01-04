import { Component } from '@angular/core';
import {CoinService} from './coin.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr *ngFor="let coin of mycoins">
        <td>{{coin.id}}</td>
        <td>{{coin.name}}</td>
        <td>{{coin.price | currency}}</td>

      </tr> 
    </table>
  </div>
  `
})
export class AppComponent {
  mycoins = [];
  constructor(private coinservice: CoinService) {
    this.mycoins = coinservice.getMyCoins();
  }
}
