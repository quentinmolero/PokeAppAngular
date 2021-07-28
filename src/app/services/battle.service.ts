import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {LogsFight} from '../models/logs';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  logsFight: LogsFight[] = [];
  pokemonWinner: Pokemon | undefined;
  fightContinue: boolean | undefined;
  pokemonsCustom: Pokemon[] = [];

  constructor() { }

  private async startAFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon | void> {

    if (pokemon1.health <= 0 && pokemon2.health <= 0) {
      throw {name : 'PokemonsNoLifeException', message : 'Pokemon can\'t figth because they are dead'};
    }
    while (pokemon1.health > 0 && pokemon2.health > 0 && this.fightContinue) {
      const pokemonWhoPlayInFirst = this.determineWhoAttackInFirst(pokemon1, pokemon2);
      if (pokemon1 === pokemonWhoPlayInFirst) {
        this.doAnAttack(pokemonWhoPlayInFirst, pokemon2);
        if (pokemon2.health > 0) {
          await this.delay(1000);
          this.doAnAttack(pokemon2, pokemon1);
        }
      } else {
        this.doAnAttack(pokemon2, pokemon1);
        if (pokemon1.health > 0) {
          await this.delay(1000);
          this.doAnAttack(pokemon1, pokemon2);
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

  private async delay(delay: number): Promise<void> {
    return new Promise((resolve)  => {
      setTimeout(resolve, delay);
    });
  }
  public async startFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<void> {
    const result = await this.startAFight(pokemon1, pokemon2);

    this.pokemonWinner = result ? result : undefined;
  }
  private determineWhoAttackInFirst(pok1: Pokemon, pok2: Pokemon, randomPokemon = Math.random): Pokemon {
    if (pok1.speed === pok2.speed) {
      return randomPokemon() > 0.5 ? pok1 : pok2;
    }
    return pok1.speed > pok2.speed ? pok1 : pok2;
  }
  private doAnAttack(pokemonAttack: Pokemon, pokemonTarget: Pokemon): void {
    const attack = pokemonAttack.determineTheAttack();
    pokemonAttack.executeAnAttack(attack, pokemonTarget);
    this.logsFight.push(new LogsFight({
      pokemonAttack,
      pokemonTarget,
      attack,
      date: new Date()
    }));
  }

  clearPokemonsCustom(): void {
    this.pokemonsCustom = [];
  }

  clearLogsFight(): void {
    this.pokemonWinner = undefined;
    this.logsFight = [];
  }

  changeFightStatus(): void {
    this.fightContinue = !this.fightContinue;
  }
}
