import { ButtonComponent, DropdownComponent } from '@ng-nx-sandbox/sandbox-ui';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../services/product.service';

import { ProductModel } from '../../shared/models';

@Component({
  selector: 'ng-nx-sandbox-products',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DropdownComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  isLoading: boolean = true;
  products: ProductModel[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe((products: ProductModel[]) => {
        console.log({products});
        this.products = products;
      })
      .add(() => this.isLoading = false);
  }

  getProducts(): void {
    this._productService.getProductsGQL()
      .subscribe((products) => {
        console.log({products});
      });
  }

  createProduct(): void {
    this._productService.addProduct()
      .subscribe((p) => {
        console.log({p});
      });
  }
}
