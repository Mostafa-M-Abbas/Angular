import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../ProductsService.service'
import { Router } from '@angular/router';

interface Products{
  id: number;
  title: string; 
  price: number; 
  description: string; 
  category: string; 
  reating: { count: number, rate: number }; 
  image:string
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  topCatProducts: Products[] = [];
  products: Products[] = [];
  category: string = 'jewelery';

  constructor(public prod_service: ProductsService, public router: Router) {}
  ngOnInit():void {
    this.prod_service.getProductsByCategory(this.category).subscribe({
      next: (res) => {
        this.topCatProducts = res;
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('complete');
      },
    });
  }
  navigateToProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  trackByFn(index: number, item: Products): number {
    return item.id;
  }
}
