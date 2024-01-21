import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';


@Component({
  standalone: true,
  imports: [ProductsComponent, RouterModule],
  selector: 'ng-nx-sandbox-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {

  }

}
