// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cadastrarUsuario(nome: any, email: any, senha: any, paroquia: any, servindo: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials.');
      });
  }

  logout() {
    return this.afAuth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}
