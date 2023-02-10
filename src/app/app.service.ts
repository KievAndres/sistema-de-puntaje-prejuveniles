import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AppService {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(environment.supabase.url, environment.supabase.publicKey);
  }
  async getMiembroEquipo(): Promise<any> {
    const {data} = await this.supabaseClient.from('MiembroEquipo').select()
    console.log(data)
    return data;
  }
}