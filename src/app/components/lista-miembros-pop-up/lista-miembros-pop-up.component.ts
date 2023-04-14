import { Component, Input } from '@angular/core';
import { MiembroRegistroRegla } from 'src/types/custom-types';

@Component({
  selector: 'lista-miembros-pop-up',
  templateUrl: 'lista-miembros-pop-up.component.html',
  styleUrls: ['lista-miembros-pop-up.component.scss']
})
export class ListaMiembrosPopUpComponent {
  @Input() listaMiembros: MiembroRegistroRegla[] = [];
  @Input() set inputMiembroElegido(textoDeBusqueda: string) {
    if (textoDeBusqueda) {
      this.listaMiembrosFiltrado = this.listaMiembros
        .filter(miembro => miembro.nombreCompleto.toLowerCase().includes(textoDeBusqueda.toLowerCase()));
    } else {
      this.listaMiembrosFiltrado = this.listaMiembros;
    }
  }

  public listaMiembrosFiltrado: MiembroRegistroRegla[];

  constructor() {
    this.listaMiembrosFiltrado = this.listaMiembros;
  }
}