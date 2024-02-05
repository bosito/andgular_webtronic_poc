import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public auth$: Observable<unknown>;

  constructor(private store: Store<any>, private auth: AuthService) {
    this.auth$ = this.store.select('');
  }

  formState = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.formState.get('name') as FormControl;
  }

  get email() {
    return this.formState.get('email') as FormControl;
  }

  get password() {
    return this.formState.get('password') as FormControl;
  }

  public submitLogin = () => {
    console.log('login submit -->', {
      name: this.name.value,
      password: this.password.value,
      email: this.email.value,
    });

    // this.auth$.pipe().subscribe({ next: (state) => {} });
  };
}
