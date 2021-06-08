import {Pokemon} from '../models/pokemon';
import {Turn} from './turn';
/*
export class Battle {


  static async startAFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon> {

    if(pokemon1.health <= 0 && pokemon2.health <= 0)
      throw {name : 'PokemonsNoLifeException', message : 'Pokemon can't figth because they are dead'};

    while(pokemon1.health > 0 && pokemon2.health > 0) {
      await Battle.delay(1000);
      const pokemonWhoPlayInFirst = Turn.determineWhoAttackInFirst(pokemon1, pokemon2);
      if(pokemon1 === pokemonWhoPlayInFirst) {
        pokemonWhoPlayInFirst.executeAnAttack(pokemonWhoPlayInFirst.determineTheAttack(), pokemon2);
        if(pokemon2.health > 0)
          pokemon2.executeAnAttack(pokemon2.determineTheAttack(), pokemon1);
      }else {
        pokemon2.executeAnAttack(pokemon2.determineTheAttack(), pokemon1);
        if(pokemon1.health > 0) {
          pokemon1.executeAnAttack(pokemon1.determineTheAttack(), pokemon2);
        }
      }
    }

    return pokemon1.health > 0 ? pokemon1 : pokemon2;
  }

    static async delay(delay: number): Promise<void> {
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  }
}*/
