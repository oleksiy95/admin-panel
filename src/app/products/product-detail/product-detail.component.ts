import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, Product, ProductService, ProductType } from 'src/app/shared';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
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
    private router: Router, private dialog: DialogService) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.productService.get(id).subscribe(res => {
        this.product = res;
        this.initForm();
      });
    });
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
      forbidComponents: [this.product.forbidComponents]
    })
  }

  onSubmit(): void {
    this.productService.update(this.product.id, this.form.value).subscribe(res => this.router.navigate(['products']));
  }

  public delete() {
    this.dialog.openDeleteDialog().subscribe(res => {
      if (!res)
        return;
        
        this.productService.delete(this.product.id).subscribe(res => this.router.navigate(['products']));
    })
    
  }

}
