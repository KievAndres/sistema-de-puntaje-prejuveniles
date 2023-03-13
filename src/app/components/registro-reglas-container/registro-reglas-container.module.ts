import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroReglasComponent } from './components/registro-reglas/registro-reglas.component';
import { AsistenciaPuntualidadComponent } from './components/asistencia-puntualidad/asistencia-puntualidad.component';


@NgModule({
  declarations: [RegistroReglasComponent, AsistenciaPuntualidadComponent],
  exports: [RegistroReglasComponent, AsistenciaPuntualidadComponent],
  imports: [CommonModule]
})
export class RegistroReglasContainerModule {}