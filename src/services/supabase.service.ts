import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';
import { ListaMiembrosPuntajeTotal } from '../types/custom-types';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}
  
  async getListaMiembros(): Promise<ListaMiembrosPuntajeTotal[] | null> {
    const { data } = await supabase.rpc('getpuntajetotal');
    return data;
  }
}