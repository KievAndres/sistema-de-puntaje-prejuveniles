import { Component, OnInit, Input } from '@angular/core';
import { MiembroRegistroRegla, PuntajeRegla } from '../../../types/custom-types';

@Component({
  selector: 'registro-reglas',
  templateUrl: 'registro-reglas.component.html',
  styleUrls: ['registro-reglas.component.scss'],
})
export class RegistroReglasComponent implements OnInit {
  @Input() public listaMiembros: MiembroRegistroRegla[] = [];
  @Input() public listaReglas: PuntajeRegla[] = [];
  public titulo: string;

  constructor() {
    this.titulo = 'Registro reglas';
  }

  public async ngOnInit(): Promise<void> {
    // this.listaReglas = await this._supabaseService.getListaReglas();
  }
}
