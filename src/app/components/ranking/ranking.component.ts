import {Component} from '@angular/core';
import { SupabaseService } from 'src/services/supabase.service';
// import { MiembroPuntajeTotal } from 'src/types/custom-types';
import { enumNombreMeses, periodoRanking } from '../../../utils/enum';

@Component({
  selector: 'ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.scss']
})
export class RankingComponent {
  public titulo = 'Ranking';
  // public listaMiembros: MiembroPuntajeTotal[] | null;
  public tituloPeridoActual: string;
  public periodoElegido: 'periodo' | 'anual';

  constructor(private _supabaseService: SupabaseService) {
    // this.listaMiembros = []
    this.tituloPeridoActual = '';
    this.periodoElegido = 'periodo';
  }

  public async ngOnInit() {
    this.getRanking('periodo');
    this.tituloPeridoActual = this._getNombreMesesPeriodoActual();
  }

  public async getRanking(vista?: 'periodo'): Promise<void> {
    const fechaActual = new Date();
    let primerDia: Date = new Date();
    let ultimoDia: Date = new Date();
    switch (vista) {
      case 'periodo':
        const periodoActual = this._getPeriodoActual(fechaActual);
        primerDia = periodoActual.primerDia;
        ultimoDia = periodoActual.ultimoDia;
        break;
      default:
        primerDia = new Date(fechaActual.getFullYear(), 0, 1);
        ultimoDia = new Date(fechaActual.getFullYear(), 11, 31);
        break;
    }
    // this.listaMiembros =
    //   await this._supabaseService.getListaMiembrosPuntajeTotalRango(
    //     primerDia.toISOString(),
    //     ultimoDia.toISOString()
    //   );
  }

  public cambiarPeriodoElegido(periodoElegido: 'periodo' | 'anual'): void {
    this.periodoElegido = periodoElegido;
    switch(periodoElegido) {
      case 'periodo':
        this.getRanking('periodo');
        break;
      case 'anual':
        this.getRanking();
        break;
    }
  }

  private _getPeriodoActual(fechaActual: Date): {primerDia: Date; ultimoDia: Date} {
    const mesActual = fechaActual.getMonth();
    let primerDia = new Date();
    let ultimoDia = new Date();
    periodoRanking.forEach(periodo => {
      if (periodo.includes(mesActual)) {
        primerDia = new Date(fechaActual.getFullYear(), periodo[0], 1),
        ultimoDia = new Date(fechaActual.getFullYear(), periodo[periodo.length - 1] + 1, 0)
      }
    });
    return {primerDia, ultimoDia};
  }

  private _getNombreMesesPeriodoActual(): string {
    const fechaActual = new Date();
    let nombreMeses: string = '';
    const mesActual = fechaActual.getMonth();
    periodoRanking.forEach(periodo => {
      if (periodo.includes(mesActual)) {
        periodo.forEach(indiceMes => {
          nombreMeses += enumNombreMeses[indiceMes] + ' ';
        })
      }
    });
    return nombreMeses.trim();
  }
}
