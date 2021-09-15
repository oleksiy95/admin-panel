import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Promotion, PromotionService } from 'src/app/shared';

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.scss']
})
export class NewPromotionComponent implements OnInit {
  public promotion: Promotion;
  public form: FormGroup;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private promotionService: PromotionService,
    private router: Router) { }



  ngOnInit(): void {
    this.promotion = new Promotion();
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      name: [this.promotion.name, Validators.required],
      description: [this.promotion.description, Validators.required],
      image: [this.promotion.image],
      action: [this.promotion.action],
    })
  }

  onSubmit(): void {
    this.promotionService.create(this.form.value).subscribe(res => this.router.navigate(['promotions']));
  }

}
