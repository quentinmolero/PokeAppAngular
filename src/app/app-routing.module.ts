import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BattleComponent} from './components/battle/battle.component';
import {SelectPokemonComponent} from './components/select-pokemon/select-pokemon.component';
import {CustomComponent} from './components/custom/custom.component';

export const routes: Routes = [
  {path: '', component: SelectPokemonComponent},
  {path: 'battle/:firstPokemonName/:secondPokemonName', component: BattleComponent},
  {path: 'battleCustom', component: BattleComponent},
  {path: 'custom', component: CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
