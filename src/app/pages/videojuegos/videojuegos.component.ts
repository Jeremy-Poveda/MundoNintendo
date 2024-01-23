import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
//Importación de la interfaz
import { Producto } from '../../interfaces/producto';

//Importación del servicio
import { DataProviderService } from '../../providers/data-provider.service'
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from "ngx-pagination";

import { RouterLinkActive, RouterLink,Router } from '@angular/router';
import { Carrito } from '../../interfaces/carrito';


@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgxPaginationModule,RouterLinkActive, RouterLink],
  providers: [DataProviderService],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent {
    //simula el id del usuario logeado
    public userID: number = 1;
  //Atributo con el tipo de dato de la interfaz
  public data : Producto[] = [];
  public page! : number;
  public selectedProduct!: Producto;
  minPrice?:number;
  maxPrice?:number;
  showDetails: boolean = false;
  constructor(private dataProvider: DataProviderService, private router:Router) {

  }

  ngOnInit() {
    this.getFilteredData();
  }

  getFilteredData() {
    this.page = 1; // Restablece la página a 1
    this.dataProvider.getProductsByRangeAndType(this.minPrice, this.maxPrice, "videojuego").subscribe((response) => { 
      if (Array.isArray(response)) {
        let dataArray = (response as Producto[]);
        this.data = dataArray;
        console.log(this.data);
      } else {
        this.data = [];
        console.error('La respuesta no es un array:', response);
      }
    });
  }

  openDetails(producto: Producto) {
    this.showDetails = true;
    this.selectedProduct = producto;
  }
  closeDetails(){
    this.showDetails = false;
  }

  updatePriceRange(min: number, max: number) {
    this.minPrice = min;
    this.maxPrice = max;
    this.getFilteredData();
  }
  addCart(){
    console.log("Logica de Kevin Roldan");
    var productCart : Carrito= 
      { id: 1, usuario_id: this.userID, producto_id: this.selectedProduct.id, cantidad:  1}
     ;
    this.dataProvider.addToCart(productCart);
    this.router.navigate(['/carrito']);
  }

}
