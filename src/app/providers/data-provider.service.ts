import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  // Cambiar donde este ubicado el endpont
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
}
