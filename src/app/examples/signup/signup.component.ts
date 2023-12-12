import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    signInForm: FormGroup;
    focus;
    focus1;
    constructor(
        private _builder: FormBuilder,
    ) { 

        this.signInForm = this._builder.group({
            nombre: ['', Validators.required],
			mail: ['', Validators.required],
            contraseña: ['', Validators.required],
			apellidos: ['', Validators.required],
            nombreusuario: ['', Validators.required],
			tipocuenta: ['', Validators.required],
        })
    }

    ngOnInit() {}

    iniciarSesion(values) {
        console.log("Inicio Sesión", values);
    }
}
