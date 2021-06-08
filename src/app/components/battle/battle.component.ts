import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {Turn} from '../../game/turn';
import {LogsFight} from '../../models/logs';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  logsFight: LogsFight[] = [];

  carapuce = new Pokemon({
    name: 'carapuce',
    health: 80,
    speed: 80,
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
    name: 'pikachu',
    health: 80,
    speed: 70,
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

  constructor() { }

  ngOnInit(): void {
    this.startAFight(this.carapuce, this.pikachu).then(r => console.log(r));
  }

  public async startAFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon> {

    if (pokemon1.health <= 0 && pokemon2.health <= 0) {
      throw {name : 'PokemonsNoLifeException', message : 'Pokemon can\'t figth because they are dead'};
    }
    while (pokemon1.health > 0 && pokemon2.health > 0) {
      await this.delay(1000);
      const pokemonWhoPlayInFirst = Turn.determineWhoAttackInFirst(pokemon1, pokemon2);
      if (pokemon1 === pokemonWhoPlayInFirst) {
        const attackPokemonWhoPlayInFirst = pokemonWhoPlayInFirst.determineTheAttack();
        pokemonWhoPlayInFirst.executeAnAttack(attackPokemonWhoPlayInFirst, pokemon2);
        this.logsFight.push(new LogsFight({
          pokemonAttack: pokemonWhoPlayInFirst,
          pokemonTarget: pokemon2,
          attack: attackPokemonWhoPlayInFirst
        }));
        console.log(this.logsFight);
        if (pokemon2.health > 0) {
          const attackPokemon2 = pokemon2.determineTheAttack();
          pokemon2.executeAnAttack(attackPokemon2, pokemon1);
          this.logsFight.push(new LogsFight({
            pokemonAttack: pokemon2,
            pokemonTarget: pokemon1,
            attack: attackPokemon2
          }));
          console.log(this.logsFight);
        }
      }else {
        const attackPokemon2 = pokemon2.determineTheAttack();
        pokemon2.executeAnAttack(attackPokemon2, pokemon1);
        this.logsFight.push(new LogsFight({
          pokemonAttack: pokemon2,
          pokemonTarget: pokemon1,
          attack: attackPokemon2
        }));
        console.log(this.logsFight);
        if (pokemon1.health > 0) {
          const attackPokemon1 = pokemon1.determineTheAttack();
          pokemon1.executeAnAttack(attackPokemon1, pokemon2);
          this.logsFight.push(new LogsFight({
            pokemonAttack: pokemon2,
            pokemonTarget: pokemon1,
            attack: attackPokemon2
          }));
          console.log(this.logsFight);
        }
      }
    }

    return pokemon1.health > 0 ? pokemon1 : pokemon2;
  }

  public async delay(delay: number): Promise<void> {
    // tslint:disable-next-line:only-arrow-functions typedef
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  }


}
