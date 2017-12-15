import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'apm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Apo Project Management';
}
