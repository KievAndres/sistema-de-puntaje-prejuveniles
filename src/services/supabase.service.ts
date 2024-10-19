import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';
import { MiembroEquipo, SubCategoria } from '../types/custom-types';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  constructor() {}

  async getListaMiembrosRegistroRegla(): Promise<MiembroEquipo[]> {
    const { data } = await supabase
      .from('MiembroEquipo')
      .select('*')
      .order('nombreCompleto');
    return data || [];
  }

  async getSubCategoria(): Promise<SubCategoria[]> {
    const { data } = await supabase
      .from('SubCategoria')
      .select('*')
      .eq('idCategoria', 'responsabilidad');
    return data || [];
  }

  async guardarAsistenciaPuntualidad(listaInsercionDatos: any): Promise<void> {
    const { error } = await supabase
      .from('RegistroPuntaje')
      .insert(listaInsercionDatos);
    console.log(error);
  }
}
