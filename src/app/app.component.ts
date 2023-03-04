import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/services/supabase.service';
import { ListaMiembros } from 'src/types/custom-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'puntaje-prejuveniles';
  listaMiembros: ListaMiembros[];

  constructor(private _supabaseService: SupabaseService) {
    this.listaMiembros = []
  }

  public async ngOnInit() {
    this.listaMiembros = await this._supabaseService.getListaMiembros();
  }
}
