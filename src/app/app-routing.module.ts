import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { RegistroReglasContainerComponent } from './components/registro-reglas-container/registro-reglas-container.component';
import { ResponsabilidadComponent } from './pages/responsabilidad/responsabilidad.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'responsabilidad'
  },
  {
    path: 'responsabilidad',
    component: ResponsabilidadComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'reglas',
    component: RegistroReglasContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
