import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Apollo, ApolloBase, gql } from 'apollo-angular';

import { ProductModel, IProductModel } from '../shared/models';
import { ApolloQueryResult } from '@apollo/client';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:3000/api/products/';
  private _apollo: ApolloBase;

  constructor(private _http: HttpClient,
              private _apolloService: Apollo) {
    this._apollo = this._apolloService.use('productsGQL');
  }

  getProductsGQL(): Observable<ApolloQueryResult<unknown>> {
    return this._apollo.watchQuery({
      query: gql`{
        allProducts {
          department
          price
          product
          productName
        }
      }`
    })
    .valueChanges.pipe(map((res) => {
      console.log({res});
      return res;
    }));
  }

  getProducts(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.baseUrl)
      .pipe(map((products: IProductModel[]) => products.map((p: IProductModel) => new ProductModel(p))));
  }

  addProduct(product: ProductModel = new ProductModel()): Observable<ProductModel> {
    return this._http.post<ProductModel>(this.baseUrl, product)
      .pipe(map((p: IProductModel) => new ProductModel(p)));
  }
}
