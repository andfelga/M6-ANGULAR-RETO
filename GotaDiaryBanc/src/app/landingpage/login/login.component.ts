import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State_user } from 'src/app/state/State_user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validUser = 'abadom54@gmail.com';
  validPassword = 'admin1';

  private formBuilder = inject(FormBuilder);

  constructor(public state:State_user ,private router: Router) { }
  
  loginForm = this.formBuilder.group({
    usermail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onsubmit() {
    if (!this.loginForm.valid) { 
         alert('Datos de inicio de sesión incorrectos');
      return; 
    }
    const username = this.loginForm.getRawValue().usermail;
    const password = this.loginForm.getRawValue().password;
    if (username == this.validUser && password == this.validPassword) {
      this.state.emailuser = username;
      this.state.password = password;
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/main']); // Redirige a la página "home"
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
