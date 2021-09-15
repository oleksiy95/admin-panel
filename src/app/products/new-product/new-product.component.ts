import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductType, ProductService } from 'src/app/shared';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  public product: Product;
  public type = ProductType;
  public form: FormGroup;
  public types = [
    { name: 'Піца', value: ProductType.pizza },
    { name: 'Салат', value: ProductType.salad },
    { name: 'Стартер', value: ProductType.starter },
    { name: 'Напій', value: ProductType.drink },
    { name: 'Соус', value: ProductType.sauce },
    { name: 'Компонет', value: ProductType.component },
    { name: 'Піца пів-на-пів', value: ProductType.halfPizza }]


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private productService: ProductService,
    private router: Router) { }



  ngOnInit(): void {
    this.product = new Product();
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      weight: [this.product.weight],
      image: [this.product.image],
      price: [this.product.price, Validators.required],
      type: [this.product.type, Validators.required],
      order: [this.product.order],
      forbidComponents: [false]
    })
  }

  onSubmit(): void {
    this.productService.create(this.form.value).subscribe(res => this.router.navigate(['products']));
  }

}
