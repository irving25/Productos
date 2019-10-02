import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct();
  }

  onSubmit(productForm: NgForm){
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(prodctForm: NgForm)
  {
    if (prodctForm != null) {
    prodctForm.reset();
    }
    this.productService.selectedProduct = new Product();
  }

}
