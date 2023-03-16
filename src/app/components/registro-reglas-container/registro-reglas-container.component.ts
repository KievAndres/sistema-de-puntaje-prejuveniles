import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { MiembroRegistroRegla, Tab, PuntajeRegla } from '../../../types/custom-types';
import { puntajeReglaId } from 'src/utils/enum';

@Component({
  selector: 'registro-reglas-container',
  templateUrl: 'registro-reglas-container.component.html',
  styleUrls: ['registro-reglas-container.component.scss']
})
export class RegistroReglasContainerComponent implements OnInit {
  public listaMiembros: MiembroRegistroRegla[];
  public listaReglas: PuntajeRegla[];
  public tabsRegistroReglas: Tab[];

  constructor(private _supabaseService: SupabaseService) {
    this.listaMiembros = [];
    this.listaReglas = [];
    this.tabsRegistroReglas = [
      {
        nombre: 'Asistencia y puntualidad',
        esActivo: false
      },
      {
        nombre: 'Registro reglas',
        esActivo: true
      }
    ];
  }

  public async ngOnInit(): Promise<void> {
    this.listaMiembros = await this._supabaseService.getListaMiembrosRegistroRegla();
    this.listaReglas = await this._supabaseService.getListaReglas();
  }

  public guardarDatos(): void {
    const listaInsercionDatos: any = [];
    this.listaMiembros.forEach(miembro => {
      if (miembro.asistencia) {
        listaInsercionDatos.push({
          idMiembroEquipo: miembro.idMiembroEquipo,
          idPuntajeRegla: puntajeReglaId.asistencia,
          fechaModificacion: new Date(2023, 1, 18).toISOString()
        });
      }
      if (miembro.puntualidad) {
        listaInsercionDatos.push({
          idMiembroEquipo: miembro.idMiembroEquipo,
          idPuntajeRegla: puntajeReglaId.puntualidad,
          fechaModificacion: new Date(2023, 1, 18).toISOString()
        });
      }
    });
    this._supabaseService.guardarAsistenciaPuntualidad(listaInsercionDatos);
  }
}