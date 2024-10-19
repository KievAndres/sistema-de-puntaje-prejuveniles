import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { Tab, SubCategoria, MiembroEquipo } from '../../../types/custom-types';

@Component({
  selector: 'registro-reglas-container',
  templateUrl: 'registro-reglas-container.component.html',
  styleUrls: ['registro-reglas-container.component.scss'],
})
export class RegistroReglasContainerComponent implements OnInit {
  public listaMiembros: MiembroEquipo[];
  public listaSubCategoria: SubCategoria[];
  public tabsRegistroReglas: Tab[];

  constructor(private _supabaseService: SupabaseService) {
    this.listaMiembros = [];
    this.listaSubCategoria = [];
    this.tabsRegistroReglas = [
      {
        nombre: 'Asistencia y puntualidad',
        esActivo: true,
      },
      {
        nombre: 'Registro reglas',
        esActivo: false,
      },
    ];
  }

  public async ngOnInit(): Promise<void> {
    this.listaSubCategoria = await this._supabaseService.getSubCategoria();
    this.listaMiembros =
      await this._supabaseService.getListaMiembrosRegistroRegla();
  }

  public guardarDatos(): void {
    const listaInsercionDatos: any = [];
    // this.listaMiembros.forEach((miembro) => {
    //   miembro.registroPuntajeRegla.map((registroPuntajeRegla) => {
    //     if (registroPuntajeRegla.cumplePuntajeRegla) {
    //       listaInsercionDatos.push({
    //         idMiembroEquipo: miembro.idMiembroEquipo,
    //         idPuntajeRegla: registroPuntajeRegla.idPuntajeRegla,
    //         fechaModificacion: new Date().toISOString(),
    //       });
    //     }
    //   });
    // });
    this._supabaseService.guardarAsistenciaPuntualidad(listaInsercionDatos);
  }
}
