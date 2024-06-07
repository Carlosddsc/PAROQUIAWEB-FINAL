import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.component.html',
  styleUrls: ['./cadastrados.component.css']
})
export class CadastradosComponent implements OnInit {
  usuarios: any[] = [
    { 
      nomeCompleto: 'Fulano de Tal', 
      email: 'fulano@example.com', 
      idade: 30, 
      paroquia: 'Paróquia X', 
      servo: 'Sim' 
    },
    { 
      nomeCompleto: 'Ciclano de Tal', 
      email: 'ciclano@example.com', 
      idade: 25, 
      paroquia: 'Paróquia Y', 
      servo: 'Não' 
    }
    // Adicione mais usuários conforme necessário
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Lógica para carregar usuários do serviço
  }

  goToCadastro() {
    this.router.navigate(['/admin/cadastro']);
  }

  goToAdminHome() {
    this.router.navigate(['/admin/admin-home']);
  }
}
