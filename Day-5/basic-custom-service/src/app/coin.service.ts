import { Injectable } from '@angular/core';

@Injectable()
export class CoinService {

  coins = [
    {id: 1, name: 'BTC', price: 3000},
    {id: 2, name: 'XRP', price: 900},
    {id: 3, name: 'Bitcoin', price: 250},
    {id: 4, name: 'Etherium', price: 45},
    {id: 5, name: 'TRON', price: 7},
    {id: 6, name: 'Tether', price: 34},
    {id: 7, name: 'Metal', price: 0.56},
    {id: 8, name: 'ZCash', price: 200},
    {id: 9, name: 'Neo', price: 75},
  ];

  constructor() { }

  getMyCoins() {
    return this.coins;
  }

}