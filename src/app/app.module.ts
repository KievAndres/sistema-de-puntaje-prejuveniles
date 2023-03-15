import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RegistroReglasContainerComponent } from './components/registro-reglas-container/registro-reglas-container.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AsistenciaPuntualidadComponent } from './components/asistencia-puntualidad/asistencia-puntualidad.component';
import { RegistroReglasComponent } from './components/registro-reglas/registro-reglas.component';
import { TabsComponent } from './components/tabs/tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RankingComponent,
    RegistroReglasContainerComponent,
    AsistenciaPuntualidadComponent,
    RegistroReglasComponent,
    TabsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
