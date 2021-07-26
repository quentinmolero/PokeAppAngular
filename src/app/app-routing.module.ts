import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BattleComponent} from './components/battle/battle.component';
import {ListPokemonComponent} from './components/list-pokemon/list-pokemon.component';

export const routes: Routes = [
  {path: '', component: ListPokemonComponent},
  {path: 'battle/:firstPokemonName/:secondPokemonName', component: BattleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
