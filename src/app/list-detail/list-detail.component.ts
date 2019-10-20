import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
    products: Product[] = [];
    notification;
    filteredProduct: Product[] = [];
    config: any;
    constructor(private productService: ProductService,
        private route: ActivatedRoute,
        http: HttpClient) {
        http.get<[Product]>('http://5da3dc1aa6593f001407a03e.mockapi.io/api/v1/qlsp').subscribe(res => {
            this.products = res;
        });

        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        this.productService
            .getProducts()
            .subscribe(next => (this.products = next), error => (this.products = []));
        this.productService.getListProductsByUser().subscribe(
            next => {
                this.filteredProduct = next;
                this.filteredProduct = this.filteredProduct;
            }
        );

    }
    deletePost(i) {
        const product = this.products[i];
        this.productService.deleteProduct(product.id).subscribe(() => {
            this.products = this.products.filter(t => t.id !== product.id);
        });
    }

}                                                                                                                                                                                                   