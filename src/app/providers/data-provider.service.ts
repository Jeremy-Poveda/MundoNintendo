import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

import { Carrito } from '../interfaces/carrito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private URL: string = 'http://localhost/api/?';
  constructor(private http: HttpClient) { }
  // Obtener productos por rango de precio y/o tipo usando el API
  getProductsByRangeAndType(minPrice?: number, maxPrice?: number, tipo?: string) {
    let params = '';

    if (minPrice !== undefined && maxPrice !== undefined) {
      params += `&findByPriceRange&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }

    if (tipo !== undefined) {
      params += `&findByType=${tipo}`;
    }

    return this.http.get(this.URL + params);
  }

  getAllProducts() {
    return this.http.get(this.URL + 'findAll');
  }

  getShoppingCart(userID:number){
    return this.http.get(this.URL + `findShoppingCart=${userID}`);
  }

  getProductByID(productID:number){
    return this.http.get(this.URL + `findByID=${productID}`);

  }
  addToCart(productData:Carrito) {
    const data = {
      usuario_id: productData.usuario_id,
      producto_id: productData.producto_id,
      cantidad: productData.cantidad
    };
  
    this.http.post(this.URL, JSON.stringify(data)).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  clearCart(userID: number): Observable<any> {
    const url = `${this.URL}usuario_id=${userID}`;
    return this.http.delete(url);
  }
  
}
