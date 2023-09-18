import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;

  constructor(private service: AccountService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.service.login(this.f['emailId'].value, this.f['password'].value).subscribe({
      next: (data) => {
        //console.log(data);
        sessionStorage.setItem("emailId", data.username);
        sessionStorage.setItem("password", data.password);
      },
      error: (err) => console.error(err)
    })
  }

  get f(): { [controlName: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
