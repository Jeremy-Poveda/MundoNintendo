import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
//Importación del servicio
import { DataProviderService } from '../../providers/data-provider.service'
import { HttpClientModule } from '@angular/common/http';

import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLinkActive, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

}
