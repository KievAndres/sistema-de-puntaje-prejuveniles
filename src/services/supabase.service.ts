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

  async getResponsabilidades(): Promise<SubCategoria[]> {
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

  async getPuntajeResponsabilidadMiembros(): Promise<any> {
    const { data } = await supabase
      .from('MiembroEquipo')
      .select(
        `
      idMiembroEquipo,
      nombreCompleto,
      apodo,
      esAyudante,
      RegistroPuntaje (
        idRegistroPuntaje,
        porcentajeObtenido,
        fechaModificacion,
        Categoria (nombre, porcentaje, esBonus),
        SubCategoria (descripcion, porcentaje, esBonus)
      )
    `
      )
      .eq('RegistroPuntaje.idCategoria', 'responsabilidad');
    return data || [];
  }
}
