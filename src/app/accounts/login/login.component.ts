import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  sub$?: Subscription;
  statusCode?: Number;

  constructor(private service: AccountService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.sub$ = this.service.login(this.f['emailId'].value, this.f['password'].value).subscribe({
      next: (data) => {
        console.log(data);
        sessionStorage.setItem("token", data.access_token);
      },
      error: (err) => {
        console.error(err.status);
        this.statusCode = err.status;
      }
    })
  }

  get f(): { [controlName: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

}
