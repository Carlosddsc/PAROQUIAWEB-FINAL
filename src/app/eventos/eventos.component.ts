import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Evento {
  id: number;
  data: string;
  hora: string;
  info: string;
  status?: 'confirmed' | 'denied';
}

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  eventos: Evento[] = [
    { id: 1, data: '2024-06-10', hora: '14:00', info: 'Reunião de planejamento' },
    { id: 2, data: '2024-06-12', hora: '10:00', info: 'Apresentação do projeto' },
    { id: 3, data: '2024-06-10', hora: '14:00', info: 'Reunião de planejamento' },
    { id: 4, data: '2024-06-12', hora: '10:00', info: 'Apresentação do projeto' },
    { id: 5, data: '2024-06-10', hora: '14:00', info: 'Reunião de planejamento' },
    // Adicione mais eventos conforme necessário
  ];

  constructor(private router: Router) {}

  confirmEvent(event: Evento) {
    event.status = 'confirmed';
    // Enviar status atualizado para o administrador (backend ou serviço)
  }

  denyEvent(event: Evento) {
    event.status = 'denied';
    // Enviar status atualizado para o administrador (backend ou serviço)
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
