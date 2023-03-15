import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { RegistroReglasContainerComponent } from './components/registro-reglas-container/registro-reglas-container.component';

export const routes: Routes = [
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
    path: 'reglas',
    component: RegistroReglasContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
