import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  onSubmit(): void {
    this.auth.login(this.form.value).subscribe(res => {
      if (res)
        this.router.navigate(['']);
    })
  }

}
