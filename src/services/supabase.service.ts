import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}
  
  async getMiembroEquipo(): Promise<void> {
    let { data } = await supabase
      .from('RegistroPuntaje')
      .select(`
        MiembroEquipo(nombreCompleto)
      `)

    console.log(data);
  }
}