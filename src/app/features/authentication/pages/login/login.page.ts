import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      recaptchaToken: ['', []]
    });
  }

  redirectToPortal() {
    this.router.navigateByUrl('portal');
  }
}
