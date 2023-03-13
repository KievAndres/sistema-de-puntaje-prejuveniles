import { Component, OnInit } from '@angular/core';
import { MiembroRegistroRegla } from '../../../../../types/custom-types';
import { SupabaseService } from '../../../../../services/supabase.service';

@Component({
  selector: 'registro-reglas',
  templateUrl: 'registro-reglas.component.html',
  styleUrls: ['registro-reglas.component.scss'],
})
export class RegistroReglasComponent implements OnInit {
  public titulo: string;
  public listaMiembros: MiembroRegistroRegla[];

  constructor(private _supabaseService: SupabaseService) {
    this.titulo = 'Registro reglas';
    this.listaMiembros = [];
  }

  public async ngOnInit(): Promise<void> {
    this.listaMiembros = await this._supabaseService.getListaMiembrosRegistroRegla();
  }
}
