import { CdkStepper } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketService } from './../../basket/basket.service';
import { Component, OnInit, Input } from '@angular/core';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe((res: any) => {
      this.appStepper.next();
    }, error => {
      console.log(error);
    });
  }

}
