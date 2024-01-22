import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [ RouterLinkActive, RouterLink,RouterOutlet ],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {

  constructor(private router: Router) {}

}
