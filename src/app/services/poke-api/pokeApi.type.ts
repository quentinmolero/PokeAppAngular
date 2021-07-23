export type PokemonName = {
  name: string
};

export type getAllPokemonResponse = {
  count: number,
  next: string,
  previous?: string,
  results: PokemonName[]
};

export type PokemonType = {
  type: {name: string}
};

export type PokemonBaseStat = {
  base_stat: number;
  stat: { name: string};
};

export type PokemonMove = {
  move: { name: string, url: string }
};

export type getAPokemonResponse = {
  id: number;
  types: [PokemonType];
  stats: [PokemonBaseStat];
  moves: [PokemonMove];
};

export type getMoveValueDetail = {
  power: number
};


