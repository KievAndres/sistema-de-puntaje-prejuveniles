import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { MiembroEquipo } from 'src/types/puntaje-prejuveniles.interface';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(environment.supabase.url, environment.supabase.publicKey);
  }
  
  async getMiembroEquipo(): Promise<void> {
    let {data: MiembroEquipo, error} =
      await this.supabaseClient
        .from('MiembroEquipo')
        .select('idMiembroEquipo');
    // console.log(data);
  }
}