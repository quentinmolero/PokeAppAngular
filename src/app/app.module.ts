import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BattleComponent } from './components/battle/battle.component';
import { LogComponent } from './components/log/log.component';
import { PokemonNameColorDirective } from './directives/pokemonNameColor/pokemon-name-color.directive';
import {HttpClientModule} from '@angular/common/http';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    LogComponent,
    PokemonNameColorDirective,
    ListPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
