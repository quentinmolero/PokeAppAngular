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
  buttonValue = 'Play Fight';
  pokemonWinner: Pokemon | undefined;

  carapuce = new Pokemon({
    maxHealth: 80,
    name: 'carapuce',
    health: 80,
    speed: 80,
    color: 'blue',
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
    color: 'yellow',
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
  }

  public async startAFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon | void> {

    if (pokemon1.health <= 0 && pokemon2.health <= 0) {
      throw {name : 'PokemonsNoLifeException', message : 'Pokemon can\'t figth because they are dead'};
    }
    while (pokemon1.health > 0 && pokemon2.health > 0 && this.buttonValue === 'Stop Fight') {
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
      } else {
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
      await this.delay(1000);
    }
    if (pokemon1.health <= 0) {
      return pokemon2;
    }else if (pokemon2.health <= 0) {
      return pokemon1;
    }

  }

  public async delay(delay: number): Promise<void> {
    // tslint:disable-next-line:only-arrow-functions typedef
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  }

  public async handlePlayClick(): Promise<void> {
    if (this.buttonValue === 'Play Fight') {
      this.buttonValue = 'Stop Fight';
      const result = await this.startAFight(this.carapuce, this.pikachu);
      this.pokemonWinner = result ? result : undefined;
    }else {
      this.buttonValue = 'Play Fight';
    }
  }


}
