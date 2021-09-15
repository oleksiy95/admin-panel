import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, Promotion, PromotionService } from 'src/app/shared';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.scss']
})
export class PromotionDetailComponent implements OnInit {
  public promotion: Promotion;
  public form: FormGroup;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private promotionService: PromotionService,
    private router: Router, private dialog: DialogService) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.promotionService.get(id).subscribe(res => {
        this.promotion = res;
        this.initForm();
      });
    });
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
    this.promotionService.update(this.promotion.id, this.form.value).subscribe(res => this.router.navigate(['promotions']));
  }

  public delete() {
    this.dialog.openDeleteDialog().subscribe(res => {
      if (!res)
        return;
        
        this.promotionService.delete(this.promotion.id).subscribe(res => this.router.navigate(['promotions']));
    })
    
  }

}
