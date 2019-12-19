import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public products: Product[];

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.dataApi.getAllProducts()
      .subscribe(products => {
        this.products =products;
      });
  }


  onPreUpdateProduct(product: Product){

  }
}
