import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegistroReglasContainerModule } from './components/registro-reglas-container/registro-reglas-container.module';
@NgModule({
  declarations: [AppComponent, RankingComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, RegistroReglasContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
