import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/services/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'puntaje-prejuveniles';
  listaMiembros: any;

  constructor(private _supabaseService: SupabaseService) {}

  public async ngOnInit() {
    this.listaMiembros = await this._supabaseService.getMiembroEquipo();
  }
}
