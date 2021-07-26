import {IPokemon, Pokemon} from '../../models/pokemon';

export const PokemonResponse = {
  id: 7,
  types: [{name: 'water'}],
  stats: [{base_stat: 44, stat: {name: 'hp'}}, {base_stat: 43, stat: {name: 'speed'}}],
  moves: [{name: 'mega-punch', url: 'https://pokeapi.co/api/v2/move/5/'}, {name: 'ice-punch', url: 'https://pokeapi.co/api/v2/move/8/'}, {name: 'mega-kick', url: 'https://pokeapi.co/api/v2/move/25/'}, {name: 'headbutt', url: 'https://pokeapi.co/api/v2/move/29/'}]
};

export const PokemonResultForGetAPokemon: IPokemon = {
  health: 440, id: 7, maxHealth: 440, name: 'water', speed: 43, type: 'water',
  attacks: [
    {name: 'mega-punch', detailUrl: 'https://pokeapi.co/api/v2/move/5/', value: 80},
    {name: 'ice-punch', detailUrl: 'https://pokeapi.co/api/v2/move/8/', value: 75},
    {name: 'mega-kick', detailUrl: 'https://pokeapi.co/api/v2/move/25/', value: 120},
    {name: 'headbutt', detailUrl: 'https://pokeapi.co/api/v2/move/29/', value: 70}
    ]
};

