// admin/lancar-eventos/lancar-eventos.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-lancar-eventos',
  templateUrl: './lancar-eventos.component.html',
  styleUrls: ['./lancar-eventos.component.css']
})
export class LancarEventosComponent {
  eventos: any[] = [];

  constructor() {}

  lancarEvento(): void {
    // Simulação de dados do evento
    const evento = {
      data: '2024-06-07',
      hora: '10:00',
      informacoes: 'Informações do evento',
      usuario: 'Usuário 1',
      presenca: 'Confirmada'
    };

    // Adiciona o evento ao array de eventos
    this.eventos.push(evento);
  }
}
