import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {BattleService} from '../../services/battle.service';
import {ListPokemonService} from '../../services/poke-api/list-pokemon.service';
import {mergeMap, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  buttonText = 'Play Fight';
  carapuce = new Pokemon({
    maxHealth: 80,
    name: 'carapuce',
    health: 80,
    speed: 80,
    type: 'water',
    attacks: [
      {
        name: 'charge',
        value: 10
      },
      {
        name: 'pisotlet à eau',
        value: 30
      },
      {
        name: 'ecume',
        value: 35
      },
      {
        name: 'trempette',
        value: 5
      },
    ]}
  );

  pikachu = new Pokemon({
    maxHealth: 80,
    name: 'pikachu',
    health: 80,
    speed: 70,
    type: 'electric',
    attacks: [
      {
        name: 'charge',
        value: 10
      },
      {
        name: 'eclair',
        value: 30
      },
      {
        name: 'fatal Tonerre',
        value: 35
      },
      {
        name: 'griffe',
        value: 5
      },
    ]}
  );

  constructor(
    public battleService: BattleService,
    private listPokemonService: ListPokemonService
    ) { }

  ngOnInit(): void {
    this.listPokemonService.getAllPokemon().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    /*this.listPokemonService.getAPokemon('squirtle').subscribe(
      data => console.log(data),
      error => console.log(error)
    );*/
    //ici tu récupères les noms dans l'url et tu les appellent
  }

  public async handlePlayClick(): Promise<void> {

    if (this.buttonText === 'Play Fight') {
      this.buttonText = 'Stop Fight';
      await this.battleService.handleModificationButtonText(this.pikachu, this.carapuce);
    }else {
      this.buttonText = 'Play Fight';
    }
  }
}
