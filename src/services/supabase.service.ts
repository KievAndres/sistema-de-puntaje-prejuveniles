import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';
import { MiembroPuntajeTotal, MiembroAsistenciaPuntualidad } from '../types/custom-types';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}

  async getListaMiembroAsistenciaPuntualidad(): Promise<MiembroAsistenciaPuntualidad[]> {
    const { data } = await supabase
      .from('MiembroEquipo')
      .select('idMiembroEquipo, nombreCompleto, esAyudante')
      .order('nombreCompleto');
    return (data || []).map(miembroAsistenciaPuntualidad => {
      return {
        idMiembroEquipo: miembroAsistenciaPuntualidad.idMiembroEquipo,
        nombreCompleto: miembroAsistenciaPuntualidad.nombreCompleto,
        esAyudante: miembroAsistenciaPuntualidad.esAyudante,
        asistencia: true,
        puntualidad: true
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

  async guardarAsistenciaPuntualidad(listaInsercionDatos: any): Promise<void> {
    const { error } = await supabase
      .from('RegistroPuntaje')
      .insert(listaInsercionDatos);
    console.log(error);
  }
}