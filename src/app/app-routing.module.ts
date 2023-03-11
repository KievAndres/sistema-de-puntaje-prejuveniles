import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { AsistenciaPuntualidadComponent } from './components/asistencia-puntualidad/asistencia-puntualidad.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ranking'
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'asistencia',
    component: AsistenciaPuntualidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
