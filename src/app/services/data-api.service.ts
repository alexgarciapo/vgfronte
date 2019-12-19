import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Supplier } from '../models/Supplier';
import { Category } from '../models/Category';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

    private api_url = 'localhost:8000/api';
    private products: Product[];
    public selectedProduct: Product = {
      id: null
    };
    constructor(private _http:HttpClient) { 
        this.products = [];
    }
  
  

  getAllProducts():Observable <Product[]>{
    return this._http.get<Product[]>(`${this.api_url}/products`);
  }

  getAllSuppliers():Observable <Product[]>{
    return this._http.get<Supplier[]>(`${this.api_url}/suppliers`);
  }

  getAllCategories():Observable <Product[]>{
    return this._http.get<Category[]>(`${this.api_url}/categories`);
  }

  addProduct(product: Product): void {
      this.products.push(this.selectedProduct);
    this._http.post(`${this.api_url}/products`, product);
    
  }
  updateProduct(product: Product): void {
    this._http.put(`${this.api_url}/update`, product);
  }
  deleteProduct(idProduct: string): void {
    this._http.delete(`${this.api_url}/destroy/idProduct`);
  }
}
