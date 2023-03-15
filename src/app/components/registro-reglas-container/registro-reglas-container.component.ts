import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { MiembroRegistroRegla, Tab } from '../../../types/custom-types';
import { puntajeReglaId } from 'src/utils/enum';

@Component({
  selector: 'registro-reglas-container',
  templateUrl: 'registro-reglas-container.component.html',
  styleUrls: ['registro-reglas-container.component.scss']
})
export class RegistroReglasContainerComponent implements OnInit {
  public listaMiembros: MiembroRegistroRegla[];
  public tabsRegistroReglas: Tab[];

  constructor(private _supabaseService: SupabaseService) {
    this.listaMiembros = [];
    this.tabsRegistroReglas = [
      {
        nombre: 'Asistencia y puntualidad',
        esActivo: true
      },
      {
        nombre: 'Registro reglas',
        esActivo: false
      }
    ];
  }

  public async ngOnInit(): Promise<void> {
    this.listaMiembros = await this._supabaseService.getListaMiembrosRegistroRegla();
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