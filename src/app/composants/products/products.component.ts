
import { Component } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'casque avec mic', price: 190, image: 'c1.jpeg' },
    { id: 2, name: 'casque blue ciel', price: 200, image: 'c2.jpeg' },
    { id: 3, name: 'casque', price: 300, image: 'c3.jpeg' },
    { id: 4, name: 'casque SONY', price: 150, image: 'c4.jpeg' },
    { id: 5, name: 'casque avec boite de charge', price: 300, image: 'c5.jpeg' },
    { id: 6, name: 'casque hot qualiter', price: 300, image: 'c6.jpeg' },
    { id: 7, name: 'casque pliable', price: 100, image: 'c7.jpeg' },
    { id: 8, name: 'ear bots', price: 200, image: 'c12.jpeg' },
    { id: 9, name: 'ear bots confortable', price: 300, image: 'c8.jpeg' },
    { id: 10, name: 'iphone 16', price: 19990, image: 'iph16.jpeg' },
    { id: 11, name: 'laptop lenouveau', price: 200, image: 'lenovea1.jpeg' },
    { id: 12, name: 'laptop iphone', price: 300, image: 'iphpc1.jpeg' },
    { id: 13, name: 'power bi de iphone ', price: 100, image: 'iphpo.jpeg' },
    { id: 14, name: 'watch', price: 200, image: 'iphwatch.jpeg' },
    { id: 15, name: 'ear bots', price: 300, image: 'ear6.jpeg' },
    { id: 16, name: 'adaptateur', price: 100, image: 'adapteur.jpeg' },
    { id: 17, name: 'ear bots', price: 200, image: 'ear8.jpeg' },
    { id: 18, name: 'iphone15', price: 17490 , image: 'iph15.jpeg' },
  ];

  constructor(private panierService: PanierService) {}

  addToCart(product: any) {
    this.panierService.addToCart(product);
  }
}
