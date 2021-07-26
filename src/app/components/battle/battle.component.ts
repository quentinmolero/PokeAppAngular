import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {BattleService} from '../../services/battle.service';
import {ListPokemonService} from '../../services/poke-api/list-pokemon.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

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

  public firstPokemon: Pokemon | undefined;
  private firstPokemonName: string | undefined;
  public secondPokemon: Pokemon | undefined;
  private secondPokemonName: string | undefined;

  constructor(
    public battleService: BattleService,
    private listPokemonService: ListPokemonService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.firstPokemonName = params.firstPokemonName;
    });
    this.route.params.subscribe((params: Params): void => {
      this.secondPokemonName = params.secondPokemonName;
    });
    if (this.firstPokemonName !== undefined) {
      this.listPokemonService.getAPokemon(this.firstPokemonName).subscribe(
        pokemon => this.firstPokemon = pokemon
      );
    }
    if (this.secondPokemonName !== undefined) {
      this.listPokemonService.getAPokemon(this.secondPokemonName).subscribe(
        pokemon => this.secondPokemon = pokemon
      );
    }
  }

  public async handlePlayClick(): Promise<void> {

    await this.battleService.handleModificationButtonText(this.pikachu, this.carapuce);
  }
}
