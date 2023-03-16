import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';
import { MiembroPuntajeTotal, MiembroRegistroRegla, PuntajeRegla } from '../types/custom-types';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}

  async getListaMiembrosRegistroRegla(): Promise<MiembroRegistroRegla[]> {
    const { data } = await supabase
      .from('MiembroEquipo')
      .select('idMiembroEquipo, nombreCompleto, esAyudante')
      .order('nombreCompleto');
    return (data || []).map(miembroRegistroRegla => {
      return {
        idMiembroEquipo: miembroRegistroRegla.idMiembroEquipo,
        nombreCompleto: miembroRegistroRegla.nombreCompleto,
        esAyudante: miembroRegistroRegla.esAyudante,
        asistencia: true,
        puntualidad: true,
        trajoBiblia: true,
        trajoLecturaBiblica: true,
        lecturBiblicaAlDia: true,
        primeroEnEncontrarCitaBiblica: true,
        recordarVersiculoDeMemoria: true,
        trajoSombrero: true,
        trajoOfrenda: true
      }
    });
  }
  
  async getListaMiembrosPuntajeTotal(): Promise<MiembroPuntajeTotal[] | null> {
    const { data } = await supabase.rpc('getpuntajetotal');
    return data || [];
  }

  async getListaMiembrosPuntajeTotalRango(fechaInicial: string, fechaFinal: string): Promise<MiembroPuntajeTotal[] | null> {
    const { data } = await supabase.rpc('get_puntaje_total_segun_rango', {
      fecha_inicial: fechaInicial,
      fecha_final: fechaFinal
    })
    return data;
  }

  async getListaReglas(): Promise<PuntajeRegla[]> {
    const { data } = await supabase
      .from('PuntajeRegla')
      .select('idPuntajeRegla, descripcion')
      .not('idPuntajeRegla', 'in', '(8b37f961-a447-47ad-b78b-3729fbc16fc8,5234bc9b-9075-4479-943a-f0690ddc6e07)');
    return data || [];
  }

  async guardarAsistenciaPuntualidad(listaInsercionDatos: any): Promise<void> {
    const { error } = await supabase
      .from('RegistroPuntaje')
      .insert(listaInsercionDatos);
    console.log(error);
  }
}