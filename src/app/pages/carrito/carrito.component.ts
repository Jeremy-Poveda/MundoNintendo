
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importación del servicio
import { DataProviderService } from '../../providers/data-provider.service';
import { HttpClientModule } from '@angular/common/http';
import { Producto } from '../../interfaces/producto';

import { RouterLinkActive, RouterLink } from '@angular/router';
import { Carrito } from '../../interfaces/carrito';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLinkActive, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent {
  public products?: Producto[];
  public productshop?: Carrito[];

  //simula el id del usuario logeado
  public userID: number = 1;

  constructor(private dataProvider: DataProviderService) {
    this.dataProvider.getShoppingCart(this.userID).subscribe((cartResponse) => {
      this.productshop = cartResponse as Carrito[];

      const productObservables = this.productshop.map((cart) => {
        return this.dataProvider.getProductByID(cart.producto_id);
      });

      forkJoin(productObservables).subscribe((productResponses) => {
        this.products = productResponses.map((response) => {
          var res = response as Producto[];
          return res[0];
        });
        console.log(this.products);
      });
    });
  }
  getCorrespondingProduct(productID: number): Producto | undefined {
    console.log(this.products);

    console.log(this.products?.find((product) => product.id === productID));
    return this.products?.find((product) => product.id === productID);
  }

  getSubtotal(productID: number, cantidad: number): number {
    var product = this.getCorrespondingProduct(productID);
    return product ? product.precio * cantidad : 0;
  }
  getIVA(productID: number):number {
    var product = this.getCorrespondingProduct(productID);
    return product ? parseFloat((product.precio * 0.12).toFixed(2)) : 0;
  }
  getTotal(productID: number, cantidad: number):number {
    return this.getSubtotal(productID, cantidad) + this.getIVA(productID);
  }
}
