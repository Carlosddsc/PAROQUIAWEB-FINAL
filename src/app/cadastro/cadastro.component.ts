import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      paroquia: ['', Validators.required],
      servindo: ['ministro', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      if (this.cadastroForm.value.senha !== this.cadastroForm.value.confirmaSenha) {
        alert('As senhas não coincidem!');
      } else {
        alert('Dados salvos com sucesso!');
        this.router.navigate(['/login']);
      }
    }
  }

  cancelarCadastro() {
    this.router.navigate(['/login']);
  }
}
