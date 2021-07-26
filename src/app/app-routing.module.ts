import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BattleComponent} from './components/battle/battle.component';
import {SelectPokemonComponent} from './components/select-pokemon/select-pokemon.component';

export const routes: Routes = [
  {path: '', component: SelectPokemonComponent},
  {path: 'battle/:firstPokemonName/:secondPokemonName', component: BattleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
