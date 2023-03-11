import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AsistenciaPuntualidadComponent } from './components/asistencia-puntualidad/asistencia-puntualidad.component';

@NgModule({
  declarations: [AppComponent, RankingComponent, NavBarComponent, AsistenciaPuntualidadComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
