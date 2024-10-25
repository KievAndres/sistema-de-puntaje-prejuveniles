import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { SubCategoria } from '../../../types/custom-types';

@Component({
  selector: 'responsabilidad',
  templateUrl: 'responsabilidad.component.html',
  styleUrls: ['responsabilidad.component.scss'],
})
export class ResponsabilidadComponent implements AfterViewInit {
  public listaMiembroResponsabilidad: any;
  public listaResponsabilidades: SubCategoria[];

  constructor(private readonly _supabaseService: SupabaseService) {
    this.listaResponsabilidades = [];
    this.listaMiembroResponsabilidad = [];
  }

  public async ngAfterViewInit(): Promise<void> {
    this.listaMiembroResponsabilidad =
      await this._supabaseService.getPuntajeResponsabilidadMiembros();
    this.listaResponsabilidades = await this._supabaseService.getResponsabilidades();
  }
}
