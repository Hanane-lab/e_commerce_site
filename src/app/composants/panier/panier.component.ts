import { Component } from '@angular/core';
import { PanierService} from '../panier.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  cart: any[] = [];
  totalPrice:number = 0;
  constructor(private panierService: PanierService) {
    this.cart = this.panierService.getCart();
  }

  loadPanier(){
    this.cart = this.panierService.getCart();
    this.totalPrice = this.panierService.getTotalPrice();
  }

  removeFromCart(productId: number) {
    this.panierService.removeFromCart(productId);
    this.loadPanier(); // Recharge le panier pour mettre à jour l'affichage
  }


  getTotalPrice() {
    return this.panierService.getTotalPrice();
  }
}

