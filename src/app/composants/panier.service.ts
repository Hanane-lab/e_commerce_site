import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(productId: number) {
    const product = this.cart.find(p => p.id === productId);
    if (product) {
      product.quantity--; // Diminue la quantité de 1
      if (product.quantity === 0) {
        this.cart = this.cart.filter(p => p.id !== productId); // Supprime si quantité est 0
      }
    }
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}
