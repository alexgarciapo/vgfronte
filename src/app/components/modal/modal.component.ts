import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Product } from '../../models/Product';
import { NgForm } from '@angular/forms';

import { Supplier } from '../../models/Supplier';
import { Category } from '../../models/Category';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', null) btnClose: ElementRef;

  public suppliers: Supplier[];
  public categories: Category[];

  ngOnInit() {
    this.getListSuppliers();
    this.getListCategories();
  }

  onSaveProduct(productForm: NgForm): void {
    if (productForm.value.id == null) {
      this.dataApi.addProduct(productForm.value);
    } else {
      this.dataApi.updateProduct(productForm.value);
    }
    productForm.resetForm();
    this.btnClose.nativeElement.click();
  }

  getListSuppliers() {
    this.dataApi.getAllSuppliers()
      .subscribe(suppliers => {
        this.suppliers =suppliers;
      });
  }

  getListCategories() {
    this.dataApi.getAllCategories()
      .subscribe(categories => {
        this.categories =categories;
        console.log(this.categories);
      });
  }

}
