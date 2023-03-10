import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/services/supabase.service';
import { ListaMiembrosPuntajeTotal } from 'src/types/custom-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'puntaje-prejuveniles';
  listaMiembros: ListaMiembrosPuntajeTotal[] | null;

  constructor(private _supabaseService: SupabaseService) {
    this.listaMiembros = []
  }

  public async ngOnInit() {
    this.listaMiembros = await this._supabaseService.getListaMiembrosPuntajeTotal()
    await this._supabaseService.getListaMiembrosPuntajePorMes(2);
  }
}
