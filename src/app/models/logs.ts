import {IAttack, IPokemon, Pokemon} from './pokemon';

export interface ILogsFight {
  pokemonAttack: Pokemon;
  pokemonTarget: Pokemon;
  attack: IAttack;
}

export class LogsFight implements ILogsFight {

  pokemonAttack: Pokemon;
  pokemonTarget: Pokemon;
  attack: IAttack;

  constructor(props: ILogsFight) {
    this.pokemonAttack = props.pokemonAttack;
    this.pokemonTarget = props.pokemonTarget;
    this.attack = props.attack;
  }
}
