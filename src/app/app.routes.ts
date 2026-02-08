import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home', 
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    { 
        path: 'collection', 
        loadComponent: () => import('./collection/collection.component').then(m => m.CollectionComponent)
    },
    // { 
    //     path: 'contact', 
    //     loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    // }
     { 
        path: 'cart', 
        loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
    },
     { 
        path: 'about-us', 
        loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
    },
];
