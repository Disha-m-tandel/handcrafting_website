import { Injectable } from '@angular/core';
import { Product } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private items: Product[] = [];

  // ➕ ADD OR INCREASE QUANTITY
  add(product: Product) {
    const existing = this.items.find(item => item.id === product.id);

    if (existing) {
      existing.quantity! += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  // ➖ DECREASE QUANTITY
  remove(product: Product) {
    const existing = this.items.find(item => item.id === product.id);
    if (!existing) return;

    existing.quantity!--;

    if (existing.quantity === 0) {
      this.items = this.items.filter(item => item.id !== product.id);
    }
  }

  // 🔍 GET QUANTITY FOR UI
  getQuantity(productId: number): number {
    return this.items.find(item => item.id === productId)?.quantity || 0;
  }

  // 🛒 GET CART ITEMS
  getItems(): Product[] {
    return this.items;
  }

  clear() {
    this.items = [];
  }


  removeItem(product: Product) {
  this.items = this.items.filter(item => item.id !== product.id);
}
}


