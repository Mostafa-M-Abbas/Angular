import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
interface Product {
  imgUrl: string;
  productName: string;
  productPrice: number;
  onSale: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
  ];
}


