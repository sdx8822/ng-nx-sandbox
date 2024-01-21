import { faker } from '@faker-js/faker';

export class ProductModel implements IProductModel {
    constructor(productObj?: IProductModel) {
        if (productObj) {
            Object.assign(this, productObj);
            return;
        }
    }

    // Default values are randomly generated via faker
    department: string = faker.commerce.department();
    isbn: string = faker.commerce.isbn();
    price: string = faker.commerce.price({symbol: '$'});
    product: string = faker.commerce.product();
    productAdjective: string = faker.commerce.productAdjective();
    productDescription: string = faker.commerce.productDescription();
    productMaterial: string = faker.commerce.productMaterial();
    productName: string = faker.commerce.productName();
    productImage: string = faker.image.urlLoremFlickr({category: this.product});
}

export interface IProductModel {
    department: string;
    isbn: string;
    price: string;
    product: string;
    productAdjective: string;
    productDescription: string;
    productMaterial: string;
    productName: string;
    productImage: string;
}