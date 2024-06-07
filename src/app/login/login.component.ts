// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  router: any;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
