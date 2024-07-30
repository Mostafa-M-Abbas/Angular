import { Component } from '@angular/core';
interface Product {
  imgUrl: string;
  productName: string;
  productPrice: number;
  onSale: boolean;
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [
    {
      imgUrl: '../assets/body/labtop1.jpeg',
      productName: 'Laptop 1',
      productPrice: 20000,
      onSale: true,
    },
    {
      imgUrl: '../assets/body/laptop2.jpeg',
      productName: 'Laptop 2',
      productPrice: 10000,
      onSale: false,
    },
    {
      imgUrl: '../assets/body/laptop3.jpeg',
      productName: 'Laptop 3',
      productPrice: 1800,
      onSale: true,
    },
    {
      imgUrl: '../assets/body/laptop3.jpeg',
      productName: 'Laptop 4',
      productPrice: 1800,
      onSale: true,
    },
    {
      imgUrl: '../assets/body/laptop3.jpeg',
      productName: 'Laptop 5',
      productPrice: 1800,
      onSale: true,
    },
    {
      imgUrl: '../assets/body/laptop3.jpeg',
      productName: 'Laptop 6',
      productPrice: 1800,
      onSale: true,
    },
  ];
}

