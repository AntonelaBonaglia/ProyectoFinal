import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup
  constructor(private fl:FormBuilder){
    this.formLogin = this.fl.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  ingresar(){
    console.log(this.formLogin.value)
  }
}
