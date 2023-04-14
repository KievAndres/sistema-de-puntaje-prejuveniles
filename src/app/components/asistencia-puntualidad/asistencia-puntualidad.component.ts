import { Component, Input } from '@angular/core';
import { MiembroRegistroRegla } from 'src/types/custom-types';
import { RegistroPuntajeRegla } from '../../../types/custom-types';
import { AsistenciaPuntualidadEnum, puntajeReglaId } from 'src/utils/enum';

@Component({
  selector: 'asistencia-puntualidad',
  templateUrl: 'asistencia-puntualidad.component.html',
  styleUrls: ['asistencia-puntualidad.component.scss'],
})
export class AsistenciaPuntualidadComponent {
  @Input() public listaMiembros: MiembroRegistroRegla[] = [];
  public titulo: string;
  public asistenciaPuntualidadEnum: typeof AsistenciaPuntualidadEnum;

  constructor() {
    this.titulo = 'Asistencia y puntualidad';
    this.asistenciaPuntualidadEnum = AsistenciaPuntualidadEnum;
  }

  public toggleSwitch(): void {
    const { ASISTENCIA, PUNTUALIDAD } = puntajeReglaId;
    this.listaMiembros = this.listaMiembros.map((miembro) => {
      miembro.registroPuntajeRegla = miembro.registroPuntajeRegla.map<RegistroPuntajeRegla>(registroPuntajeRegla => {
        if ([ASISTENCIA, PUNTUALIDAD].includes(registroPuntajeRegla.idPuntajeRegla)) {
          registroPuntajeRegla.cumplePuntajeRegla = !registroPuntajeRegla.cumplePuntajeRegla;
        }
        return registroPuntajeRegla;
      })
      return miembro;
    });
  }

  public toggleRegistro(
    registroPuntajeRegla: RegistroPuntajeRegla[],
    tipo: string
  ): void {
    const reglaId = puntajeReglaId[tipo as keyof typeof puntajeReglaId];
    for(let registro of registroPuntajeRegla) {
      if (registro.idPuntajeRegla === reglaId) {
        registro.cumplePuntajeRegla = !registro.cumplePuntajeRegla;
        break;
      }
    }
  }

  public getAsistenciaPuntualidad(
    registroPuntajeRegla: RegistroPuntajeRegla[],
    tipo: string
  ): boolean {
    const reglaId = puntajeReglaId[tipo as keyof typeof puntajeReglaId];
    let cumplePuntajeRegla = false;
    for(let registro of registroPuntajeRegla) {
      if (registro.idPuntajeRegla === reglaId) {
        cumplePuntajeRegla = registro.cumplePuntajeRegla;
        break;
      }
    }
    return cumplePuntajeRegla;
  }
}
