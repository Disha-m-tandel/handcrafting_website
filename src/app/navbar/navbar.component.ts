import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeMenu: 'home' | 'contact' | 'collection' | 'cart' | 'about-us' | 'null' = 'null';



constructor(
  private router: Router,
  @Inject(PLATFORM_ID) private platformId: Object
) { 
  // 🔥 THIS IS THE KEY FIX
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveFromUrl(event.urlAfterRedirects);
      }
    });
}


// 🔥 SINGLE SOURCE OF TRUTH
  setActiveFromUrl(url: string) {
    if (url.includes('collection')) {
      this.activeMenu = 'collection';
    } else if (url.includes('cart')) {
      this.activeMenu = 'cart';
    } else if (url.includes('about-us')) {
      this.activeMenu = 'about-us';
    }   
    else {
      this.activeMenu = 'home';
    }
  }


  scrollToContact() {
    // If already on home → just scroll
    if (this.router.url === '/home') {
      this.scroll();
    } else {
      // Navigate to home first, then scroll
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.scroll(), 100);
      });
    }
  }


private scroll() {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }


setActive(menu: any) {
  this.activeMenu = menu;
}

goHome() {
  this.router.navigate(['/home']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.activeMenu = 'home';
  });

}







menuOpen = false;
isMobile = false;

  ngOnInit() {
    // Start with menu hidden
     if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      this.menuOpen = !this.isMobile; // desktop open, mobile closed
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.isMobile = event.target.innerWidth <= 768;

  // If desktop, keep menu visible
  if (!this.isMobile) {
    this.menuOpen = true;
  }
}


}
