import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { id: 1, name: 'casque avec mic', price: 190,priceAvant:210 , image: 'c1.jpeg' },
    { id: 2, name: 'casque blue ciel', price: 200,priceAvant:220 , image: 'c2.jpeg' },
    { id: 3, name: 'casque', price: 300,priceAvant:320 , image: 'c3.jpeg' },
    { id: 4, name: 'casque SONY', price: 150,priceAvant: 170, image: 'c4.jpeg' },
    { id: 5, name: 'casque avec boite de charge', price: 300,priceAvant: 320, image: 'c5.jpeg' },
    { id: 6, name: 'casque hot qualiter', price: 300,priceAvant:320 , image: 'c6.jpeg' },
    { id: 7, name: 'casque pliable', price: 100,priceAvant:120 , image: 'c7.jpeg' },
    { id: 8, name: 'ear bots', price: 200,priceAvant: 220, image: 'c12.jpeg' },
  ];
  constructor(private panierService: PanierService) {}

  addToCart(product: any) {
    this.panierService.addToCart(product);
  }
}
