import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputsLogin: Array<any> = [];
  loading = true;
  usuario={
    user:"",
    pass:""
  }
  
  constructor(private router: Router) { }

 async ngOnInit() {
    this.loading = true;
   // let datos = await this.tesorero.getTesoreros();
  //  console.log(datos);
    this.loading = false;

    this.inputsLogin = [
      {
        icon: 'bx bx-user text-danger',
        placeholder: 'Ingrese su Usuario',
        type: 'text',
        arial_label: 'Usuario',
        disabled: false,
        name:"user"
      },
      {
        icon: 'bx bx-lock-alt',
        placeholder: 'Ingrese su Contraseña',
        type: 'password',
        arial_label: 'Contraseña',
        disabled: true,
        name:"pass"
      }
    ];    
  }
  async iniciarSesion()
  {
    console.table(this.usuario)
   //let dato= await this.tesorero.postIniciarSesion(this.usuario)
   let dato=true
   if(dato)
    this.router.navigateByUrl('/Home');
    else
    alert("datos incorrectos")
  }
}
