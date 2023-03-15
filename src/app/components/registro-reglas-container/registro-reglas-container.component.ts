import { Component } from '@angular/core';

@Component({
  selector: 'registro-reglas-container',
  templateUrl: 'registro-reglas-container.component.html',
  styleUrls: ['registro-reglas-container.component.scss']
})
export class RegistroReglasContainerComponent {
  public titulo: string;

  constructor() {
    this.titulo = 'Asistencia y puntualidad';
  }
}