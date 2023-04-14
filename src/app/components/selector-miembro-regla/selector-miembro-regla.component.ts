import { Component, Input } from '@angular/core';
import {
  MiembroRegistroRegla,
  PuntajeRegla,
} from '../../../types/custom-types';
import { getColorFromPalette } from 'src/utils/enum';

@Component({
  selector: 'selector-miembro-regla',
  templateUrl: 'selector-miembro-regla.component.html',
  styleUrls: ['selector-miembro-regla.component.scss'],
})
export class SelectorMiembroReglaComponent {
  @Input() regla?: PuntajeRegla;
  @Input() listaMiembros: MiembroRegistroRegla[] = [];

  public inputMiembroElegido: string;
  public miembroSugerido: MiembroRegistroRegla | undefined;
  public listaMiembrosSeleccionados: MiembroRegistroRegla[];
  public toggleRegla: boolean;

  constructor() {
    this.inputMiembroElegido = '';
    this.listaMiembrosSeleccionados = [];
    this.toggleRegla = true;
  }

  public changeMiembroElegido(): void {
    if (this.inputMiembroElegido) {
      const listaMiembrosFiltrado = this.listaMiembros.filter((miembro) =>
        miembro.nombreCompleto
          .toLowerCase()
          .includes(this.inputMiembroElegido.toLowerCase()) &&
        !this._miembroHaSidoAdicionadoAnteriormente(miembro)
      );
      if (listaMiembrosFiltrado.length > 0) {
        this.miembroSugerido = listaMiembrosFiltrado[0];
      } else {
        this.miembroSugerido = undefined;
      }
    } else {
      this.miembroSugerido = undefined;
    }
  }

  public adicionarSugerencia(): void {
    if (this.miembroSugerido) {
      if (!this._miembroHaSidoAdicionadoAnteriormente(this.miembroSugerido)) {
        this.listaMiembrosSeleccionados.push(this.miembroSugerido);
        this.miembroSugerido = undefined;
        this.inputMiembroElegido = '';
      }
    }
  }

  public getColorMiembroSeleccionado(index: number): string {
    return getColorFromPalette(index);
  }

  public borrarMiembroSeleccionado(miembroABorrar: MiembroRegistroRegla): void {
    this.listaMiembrosSeleccionados = this.listaMiembrosSeleccionados.filter(miembroSeleccionado => miembroSeleccionado.idMiembroEquipo !== miembroABorrar.idMiembroEquipo);
  }

  public changeToggleRegla(): void {
    this.toggleRegla = !this.toggleRegla;
  }

  public updateSelectorMiembroRegla(): void {
    // this.listaMiembros = this.listaMiembros.map()
  }

  private _miembroHaSidoAdicionadoAnteriormente(
    nuevoMiembroSeleccionado: MiembroRegistroRegla
  ): boolean {
    return this.listaMiembrosSeleccionados
      .map((miembroSeleccionado) => miembroSeleccionado.idMiembroEquipo)
      .includes(nuevoMiembroSeleccionado.idMiembroEquipo);
  }
}
