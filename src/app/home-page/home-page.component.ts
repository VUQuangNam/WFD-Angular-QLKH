import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    filteredProduct: Product[] = [];
    products: Product[] = [];
    notification;


    constructor(private router: Router,
        private productService: ProductService,
        private route: ActivatedRoute,
        http: HttpClient) { }

    ngOnInit() {
        this.productService.getListProductsByUser().subscribe(
            next => {
                this.filteredProduct = next;
                this.filteredProduct = this.filteredProduct;
            }
        );
    }
    search(key) {
        this.notification = true;
        this.filteredProduct = this.filteredProduct.filter(product => product.name.toLowerCase().includes(key.toLowerCase()));
        console.log(this.filteredProduct);
        console.log(this.notification);
    }
}
