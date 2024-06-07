import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToEventos() {
    this.router.navigate(['/eventos']);
  }

  goToInformacoes() {
    this.router.navigate(['/informacoes']);
  }

  goToMinisterio() {
    this.router.navigate(['/ministerio']);
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
