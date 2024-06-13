import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user: string = '';
  public password: string = '';
  public mensajeError: string = '';
  public serviceError: boolean = false;
  public mostrarCampoValidacion: boolean = false;


  btnLoading: boolean = false;
  constructor(private router: Router, private loginSrv: loginService) {

  }

  login() {
    this.btnLoading = true;
    this.serviceError=false
    const data = {

      "username": this.user,
      "password": this.password

    }
    this.loginSrv.login(data).subscribe(
      (data: any) => {
        this.btnLoading = false;
        this.alertSucces();
        localStorage.setItem('token', JSON.stringify(data));
        this.user = '';
        this.password = '';
        this.router.navigate(['home']);
      },
      (err: any) => {
        console.log('error:', err);
        if (err.error && err.error.errors && err.error.errors.mensaje) {
          this.mensajeError = err.error.errors.mensaje;
        } else {
          this.mensajeError = 'Usuario o contraseña incorrecta';
        }
        if (err.status === 404 && err.error && err.error.codError === 2) {
          this.handleInactiveUserError();
        }
        this.btnLoading = false;
        this.serviceError = true;
        this.user = '';
        this.password = '';
      }
    );
  }
  handleInactiveUserError() {
    this.serviceError = true;
    this.mostrarCampoValidacion = true;
    this.mensajeError = 'Su usuario no está activado, por favor ingrese su código de verificación.';
  }
  alertSucces() {
    Swal.fire({
      icon: 'success',
      width: 400,
      title: 'Login con éxito',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
