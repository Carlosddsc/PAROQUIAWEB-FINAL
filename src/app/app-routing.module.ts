import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CadastradosComponent } from './admin/cadastrados/cadastrados.component';
import { LancarEventosComponent } from './admin/lancar-eventos/lancar-eventos.component';
import { LoginComponent } from './login/login.component';
import { MinisterioComponent } from './ministerio/ministerio.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EventosComponent } from './eventos/eventos.component'; // Importe o componente de eventos

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin-home', component: AdminHomeComponent },
    { path: 'admin/cadastrados', component: CadastradosComponent },
    { path: 'admin/lancar-eventos', component: LancarEventosComponent },
    { path: 'ministerio', component: MinisterioComponent },
    { path: 'informacoes', component: InformacoesComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'eventos', component: EventosComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Alterado para redirecionar para '/home'
    { path: 'cancelar-cadastro', redirectTo: '/login', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
