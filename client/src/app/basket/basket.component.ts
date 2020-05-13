import { IBasketItem, IBasketTotals } from './../shared/models/basket';
import { BasketService } from './basket.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBasket } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basketTotals$: Observable<IBasketTotals>;
  basket$: Observable<IBasket>;

  constructor(private basektService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basektService.basket$;
    this.basketTotals$ = this.basektService.basketTotal$;
  }

  removeBasketItem(item: IBasketItem) {
    this.basektService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basektService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basektService.decrementItemQuantity(item);
  }

}
