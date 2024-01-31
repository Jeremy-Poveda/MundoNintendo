import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
//Importación de la interfaz
import { Producto } from '../../interfaces/producto';

//Importación del servicio
import { DataProviderService } from '../../providers/data-provider.service'
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from "ngx-pagination";

import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { Carrito } from '../../interfaces/carrito';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-busquedaproduct',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgxPaginationModule, RouterLinkActive, RouterLink],
  providers: [DataProviderService],
  templateUrl: './busquedaproduct.component.html',
  styleUrl: './busquedaproduct.component.css'
})
export class BusquedaproductComponent {
  //simula el id del usuario logeado
  public userID: number = 1;
  //Atributo con el tipo de dato de la interfaz
  public data: Producto[] = [];
  public totalProducts: Producto[] = [];
  public page!: number;
  public selectedProduct!: Producto;
  minPrice?: number;
  maxPrice?: number;
  showDetails: boolean = false;
  constructor(private dataProvider: DataProviderService, private router: Router, private busquedaService: BusquedaService) {

  }

  ngOnInit() {
    this.busquedaService.searchResults$.subscribe((results) => {
      this.data = results;
    });
  }

  getFilteredData() {
    this.page = 1; // Restablece la página a 1
    this.busquedaService.searchResults$.subscribe((results) => {
      this.data = results;
    });
  }

  openDetails(producto: Producto) {
    this.showDetails = true;
    this.selectedProduct = producto;
  }
  closeDetails() {
    this.showDetails = false;
  }

  updatePriceRange(min: number, max: number) {
    this.busquedaService.searchResults$.subscribe((results) => {
      this.data = results.filter(producto => producto.precio >= min && producto.precio <= max);
    });
  }

  addCart() {
    var productCart: Carrito =
      { id: 1, usuario_id: this.userID, producto_id: this.selectedProduct.id, cantidad: 1 }
      ;
    this.dataProvider.addToCart(productCart).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
        this.router.navigate(['/carrito']);
      }
    );
  }


  sortByPriceAscending() {
    this.page = 1; // Restablece la página a 1
    this.data.sort((a, b) => a.precio - b.precio);
  }

  sortByPriceDescending() {
    this.page = 1; // Restablece la página a 1
    this.data.sort((a, b) => b.precio - a.precio);
  }

  filterByGenre(genre: string) {
    this.busquedaService.searchResults$.subscribe((results) => {
      this.data = results.filter(producto => producto.detalles.includes(genre));
    });
  }

}
