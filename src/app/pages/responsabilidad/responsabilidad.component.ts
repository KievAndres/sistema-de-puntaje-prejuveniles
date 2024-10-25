import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { SubCategoria } from '../../../interfaces/sub-categoria.interface';
import { MappedMiembroSubCategoria } from '../../../interfaces/mapped-miembro-sub-categoria.interface';
import {
  GetResponsabilidadMiembro,
  GetResponsabilidadRegistroPuntaje,
} from '../../../interfaces/get-puntaje-responsabilidad-miembros.interface';
import MiembroResponsabilidadMock from '../../mocks/miembro-responsabilidad.mock.json';
import { MappedSubCategoriaValues } from '../../../interfaces/mapped-sub-categoria-values.interface';

@Component({
  selector: 'responsabilidad',
  templateUrl: 'responsabilidad.component.html',
  styleUrls: ['responsabilidad.component.scss'],
})
export class ResponsabilidadComponent implements AfterViewInit {
  public listaMiembroResponsabilidad: GetResponsabilidadMiembro[];
  public listaResponsabilidades: SubCategoria[];
  public listaResponsabilidadesPaginadas: SubCategoria[][];
  public selectedPage: number;
  public mappedMiembroResponsabilidad: MappedMiembroSubCategoria;

  private readonly _PAGINATOR_SIZE: number = 3;
  private readonly _ID_CATEGORIA: string = 'responsabilidad';

  constructor(private readonly _supabaseService: SupabaseService) {
    this.listaResponsabilidades = [];
    this.listaMiembroResponsabilidad = [];
    this.listaResponsabilidadesPaginadas = [];
    this.selectedPage = 1;
    this.mappedMiembroResponsabilidad = {} as MappedMiembroSubCategoria;
  }

  public async ngAfterViewInit(): Promise<void> {
    // this.listaMiembroResponsabilidad =
    //   await this._supabaseService.getPuntajeResponsabilidadMiembros();
    this.listaMiembroResponsabilidad = MiembroResponsabilidadMock;
    this._mapMiembroSubCategoria();

    this.listaResponsabilidades =
      await this._supabaseService.getResponsabilidades();
    this._paginateResponsabilidades();
    // this.listaResponsabilidades = MiembroResponsabilidadMock;
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

  private _mapMiembroSubCategoria(): void {
    this.listaMiembroResponsabilidad.forEach((miembro) => {
      
      const registroPuntaje: GetResponsabilidadRegistroPuntaje[] =
        miembro.RegistroPuntaje;
      const mappedSubCategoriaValues: MappedSubCategoriaValues =
        {} as MappedSubCategoriaValues;
      registroPuntaje.forEach((puntajeItem) => {
        const idSubCategoria: string = puntajeItem.SubCategoria.idSubCategoria;
        mappedSubCategoriaValues[idSubCategoria] = true;
      });
      this.mappedMiembroResponsabilidad[miembro.idMiembroEquipo] = mappedSubCategoriaValues;
    });
  }
}
