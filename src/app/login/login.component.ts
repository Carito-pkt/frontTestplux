import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  Login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        alert('✅ Usuario ingresó con éxito');
      },
      (error) => {
        console.log(error);
        alert('❌ Credenciales incorrectas');
      }
    );
  }
}
