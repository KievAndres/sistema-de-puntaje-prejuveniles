import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { MiembroEquipo, SubCategoria } from '../types/custom-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'puntaje-prejuveniles';
  public listaMiembros: MiembroEquipo[];
  public listaSubCategoria: SubCategoria[];
  public puntajeResponsabilidad: any;
  constructor(private readonly _supabaseService: SupabaseService) {
    this.listaMiembros = [];
    this.listaSubCategoria = [];
  }

  public async ngOnInit(): Promise<void> {
    // this.listaMiembros = await this._supabaseService.getListaMiembrosRegistroRegla();
    // this.listaSubCategoria = await this._supabaseService.getSubCategoria();
  }
}
