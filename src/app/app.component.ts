import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'puntaje-prejuveniles';
  listaMiembros: any;

  constructor(private _appService: AppService) {}

  public async ngOnInit() {
    this.listaMiembros = await this._appService.getMiembroEquipo();
  }
}
