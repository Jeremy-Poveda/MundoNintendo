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
  private URLProducts: string = 'http://localhost/api/products.php?';
  private URLCart: string = 'http://localhost/api/cart.php?';

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

    return this.http.get(this.URLProducts + params);
  }

  getAllProducts() {
    return this.http.get(this.URLProducts + 'findAll');
  }

  getShoppingCart(userID:number){
    return this.http.get(this.URLCart + `findShoppingCart=${userID}`);
  }

  getProductByID(productID:number){
    return this.http.get(this.URLProducts + `findByID=${productID}`);

  }
  
  addToCart(productData:Carrito) {
    const data = {
      usuario_id: productData.usuario_id,
      producto_id: productData.producto_id,
      cantidad: productData.cantidad
    };
    return this.http.post(this.URLCart, JSON.stringify(data))

  }

  clearCart(userID: number): Observable<any> {
    const url = `${this.URLCart}usuario_id=${userID}`;
    return this.http.delete(url);
  }

  updateCart(data:Carrito){
    return this.http.put(this.URLCart,JSON.stringify(data));
  }
  
}
