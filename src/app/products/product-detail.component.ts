import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    product: IProduct;
    products: IProduct[];

    constructor(private _route: ActivatedRoute,
         private _productService: ProductService,
         private _router: Router) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts1();
        let id = +this._route.snapshot.paramMap.get('id');
        //this.pageTitle += `: ${id}`;
        this.product = this.products.find(x=>x.productId == id);
        //this.pageTitle = `{$id}`;
        // this._productService.getProducts()
        //         .subscribe(products => this.products = products,
        //                    error => this.errorMessratingge = <any>error);
    }

}