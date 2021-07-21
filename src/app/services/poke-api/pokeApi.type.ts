export type PokemonName = {
  name: string,
  [id: string]: unknown
};

export type PokemonName2 = {
  name: string,
  url: string
};

export type getAllPokemonResponse = {
  count: number,
  next: string,
  previous?: string,
  results: PokemonName[]
};
