export interface IAttack {
  name: string;
  value: number;
  detailUrl?: string;
}

export interface IPokemon {
  id?: number;
  name: string;
  health: number;
  speed: number;
  attacks: IAttack[];
  maxHealth: number;
  type: string;
}

export class Pokemon implements IPokemon{
  id?: number;
  name: string;
  health: number;
  speed: number;
  attacks: IAttack[];
  maxHealth: number;
  type: string;

  constructor(props: IPokemon) {
    this.id = props.id;
    this.name = props.name;
    this.health = props.health;
    this.speed = props.speed;
    this.attacks = props.attacks;
    this.maxHealth = props.health;
    this.type = props.type;
  }

  toString(): string {
    const stringName =  this.name !== '' ? this.name : 'non renseigné';
    return 'le name est ' + stringName
      + ' il a ' + this.health + ' point de vie';
  }

  determineTheAttack(randomAttack = Math.random): IAttack {
    return this.attacks[Math.round(randomAttack() * (this.attacks.length - 1))];
  }

  executeAnAttack(attack: IAttack, pokemon: Pokemon): void {

    pokemon.health -= attack.value;
    pokemon.health = pokemon.health < 0 ? 0 : pokemon.health;
  }
}
