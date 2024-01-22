import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IndexComponent, VideojuegosComponent,CarritoComponent, NavbarComponent, FooterComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MundoNintendo';
  isIndexPage: boolean;

  constructor(private router: Router) {
    console.log(this.router.url)
    this.isIndexPage = this.router.url === '/';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isIndexPage = this.router.url === '/';
      }
    });
  }
}