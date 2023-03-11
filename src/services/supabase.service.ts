import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';
import { ListaMiembrosPuntajeTotal, ListaMiembrosPuntajePorMes } from '../types/custom-types';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}
  
  async getListaMiembrosPuntajeTotal(): Promise<ListaMiembrosPuntajeTotal[] | null> {
    const { data } = await supabase.rpc('getpuntajetotal');
    return data || [];
  }

  async getListaMiembrosPuntajePorMes(mes: number): Promise<ListaMiembrosPuntajePorMes[] | null> {
    const { data } = await supabase.rpc('get_puntaje_mensual', {
      mes
    })
    return data || [];
  }

  async getListaMiembrosPuntajeTotalRango(fechaInicial: string, fechaFinal: string): Promise<ListaMiembrosPuntajeTotal[] | null> {
    const { data } = await supabase.rpc('get_puntaje_total_segun_rango', {
      fecha_inicial: fechaInicial,
      fecha_final: fechaFinal
    })
    return data;
  }
}