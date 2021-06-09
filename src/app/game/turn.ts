import {Pokemon} from '../models/pokemon';

export class Turn {

  static determineWhoAttackInFirst(pok1: Pokemon, pok2: Pokemon, randomPokemon = Math.random): Pokemon {
    if (pok1.speed === pok2.speed) {
      return randomPokemon() > 0.5 ? pok1 : pok2;
    }
    return pok1.speed > pok2.speed ? pok1 : pok2;
  }
}
