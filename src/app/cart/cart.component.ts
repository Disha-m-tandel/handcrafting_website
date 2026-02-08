import { Component } from '@angular/core';
import { Product } from '../model/model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
cartItems: Product[] = [];
  UserService: any;

   constructor(public userService: UserService) {}

ngOnInit() {
    this.cartItems = this.userService.getItems(); // ✅ WILL WORK
  }

sendAllToWhatsApp() {
  let message = 'Hi, I want these designs:\n\n';

  this.cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n${window.location.origin}/${item.image}\n\n`;
  });

  window.open(
    `https://wa.me/919113872844?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

// removeCompletely(item: Product) {
//     this.userService.removeItem(item);
//     this.cartItems = this.userService.getItems(); // refresh view
//   }


  removeItem(item: any) {
  this.userService.removeItem(item);
  this.cartItems = this.userService.getItems();
}
}
