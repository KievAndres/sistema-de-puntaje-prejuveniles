import {Component, OnInit} from '@angular/core';
import { Miembro, MiembroAsistenciaPuntualidad } from '../../../types/custom-types';
import { SupabaseService } from '../../../services/supabase.service';
import { puntajeReglaId } from '../../../utils/enum';

@Component({
  selector: 'asistencia-puntualidad',
  templateUrl: 'asistencia-puntualidad.component.html',
  styleUrls: ['asistencia-puntualidad.component.scss']
})
export class AsistenciaPuntualidadComponent implements OnInit {
  public titulo: string;
  public listaMiembros: MiembroAsistenciaPuntualidad[];

  constructor(private _supabaseService: SupabaseService) {
    this.titulo = 'Asistencia y puntualidad';
    this.listaMiembros = [];
  }

  public async ngOnInit(): Promise<void> {
    this.listaMiembros = await this._supabaseService.getListaMiembroAsistenciaPuntualidad();
  }

  public toggleSwitch(): void {
    this.listaMiembros = this.listaMiembros.map(miembro => {
      miembro.asistencia = !miembro.asistencia;
      miembro.puntualidad = !miembro.puntualidad;
      return miembro;
    })
  }

  public toggleRegistro(miembro: MiembroAsistenciaPuntualidad, registro: 'asistencia' | 'puntualidad'): void {
    switch(registro) {
      case 'asistencia':
        miembro.asistencia = !miembro.asistencia;
        break;
      case 'puntualidad':
        miembro.puntualidad = !miembro.puntualidad;
        break;
    }
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