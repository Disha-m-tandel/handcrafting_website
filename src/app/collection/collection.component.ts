import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../model/model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {



  products : Product[] =[
    { id : 1, name: 'Floral Hoop', image: 'assets/images/1.webp' },
    { id : 2, name: 'Floral Hoop', image: 'assets/images/2.webp' },
    { id : 3, name: 'Floral Hoop', image: 'assets/images/3.webp' },
    { id : 5, name: 'Floral Hoop', image: 'assets/images/5.webp' },
    { id : 6, name: 'Floral Hoop', image: 'assets/images/6.webp' },
    { id : 7, name: 'Floral Hoop', image: 'assets/images/7.webp' },
  ];
  

  constructor(public userService: UserService) {}

addToCart(product: Product) {
  this.userService.add(product);
}

removeFromCart(product: Product) {
  this.userService.remove(product);
}

  sendSingle(product: Product) {
  const message =
    `Hi, I like this design:\n${product.name}\n${window.location.origin}/${product.image}`;

  window.open(
    `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}
}
