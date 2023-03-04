import { Injectable } from '@angular/core';
import { supabase } from 'src/utils/supabase';

@Injectable({ providedIn: 'root' })
export class SupabaseService {

  constructor() {}
  
  async getMiembroEquipo(): Promise<void> {
    let { data } = await supabase
      .from('MiembroEquipo')
      .select('nombreCompleto')

    console.log(data);
  }
}