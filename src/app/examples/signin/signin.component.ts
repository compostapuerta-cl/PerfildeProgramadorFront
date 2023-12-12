import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  test : Date = new Date();
  signInForm: FormGroup;
  idtipocuenta: number;
  focus;
  focus1;
  constructor(
      private _builder: FormBuilder,
  ) { 

      this.signInForm = this._builder.group({
          mail: ['', Validators.required],
          contraseña: ['', Validators.required],
      })
  }

  ngOnInit() {}

  iniciarSesion(values) {
      console.log("Inicio Sesión", values);
  }

}
