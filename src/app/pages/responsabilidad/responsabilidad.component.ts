import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { SubCategoria } from '../../../interfaces/sub-categoria.interface';

@Component({
  selector: 'responsabilidad',
  templateUrl: 'responsabilidad.component.html',
  styleUrls: ['responsabilidad.component.scss'],
})
export class ResponsabilidadComponent implements AfterViewInit {
  public listaMiembroResponsabilidad: any;
  public listaResponsabilidades: SubCategoria[];
  public listaResponsabilidadesPaginadas: SubCategoria[][];
  public selectedPage: number;

  private readonly _PAGINATOR_SIZE: number = 3;

  constructor(private readonly _supabaseService: SupabaseService) {
    this.listaResponsabilidades = [];
    this.listaMiembroResponsabilidad = [];
    this.listaResponsabilidadesPaginadas = [];
    this.selectedPage = 1;
  }

  public async ngAfterViewInit(): Promise<void> {
    this.listaMiembroResponsabilidad =
      await this._supabaseService.getPuntajeResponsabilidadMiembros();
    this.listaResponsabilidades =
      await this._supabaseService.getResponsabilidades();
    this._paginateResponsabilidades();
  }

  public changeSelectedPage(newSelectedPage: number): void {
    this.selectedPage = newSelectedPage;
  }

  private _paginateResponsabilidades(): void {
    const subArraySize = Math.ceil(
      this.listaResponsabilidades.length / this._PAGINATOR_SIZE
    );

    this.listaResponsabilidadesPaginadas = Array.from(
      { length: subArraySize },
      (_, i) =>
        this.listaResponsabilidades.slice(
          i * this._PAGINATOR_SIZE,
          (i + 1) * this._PAGINATOR_SIZE
        )
    );
  }
}
