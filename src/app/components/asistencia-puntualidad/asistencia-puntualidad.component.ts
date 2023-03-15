import { Component, Input } from '@angular/core';
import { MiembroRegistroRegla } from 'src/types/custom-types';

@Component({
  selector: 'asistencia-puntualidad',
  templateUrl: 'asistencia-puntualidad.component.html',
  styleUrls: ['asistencia-puntualidad.component.scss'],
})
export class AsistenciaPuntualidadComponent {
  @Input() public listaMiembros: MiembroRegistroRegla[] = [];
  public titulo: string;

  constructor() {
    this.titulo = 'Asistencia y puntualidad';
  }

  public toggleSwitch(): void {
    this.listaMiembros = this.listaMiembros.map((miembro) => {
      miembro.asistencia = !miembro.asistencia;
      miembro.puntualidad = !miembro.puntualidad;
      return miembro;
    });
  }

  public toggleRegistro(
    miembro: MiembroRegistroRegla,
    registro: 'asistencia' | 'puntualidad'
  ): void {
    switch (registro) {
      case 'asistencia':
        miembro.asistencia = !miembro.asistencia;
        break;
      case 'puntualidad':
        miembro.puntualidad = !miembro.puntualidad;
        break;
    }
  }
}
