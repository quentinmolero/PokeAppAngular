import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BattleComponent } from './components/battle/battle.component';
import { LogComponent } from './components/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
