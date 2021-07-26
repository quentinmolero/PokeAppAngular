import { TestBed } from '@angular/core/testing';

import { ListPokemonService } from './list-pokemon.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PokemonName} from './pokeApi.type';
import {Pokemon} from '../../models/pokemon';
import {PokemonResponse, PokemonResultForGetAPokemon} from './resultPokeApiFixture';

describe('ListPokemonService', () => {
  let service: ListPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListPokemonService]
    });
    service = TestBed.inject(ListPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the return of get All Pokemon', () => {
    const http = TestBed.inject(HttpTestingController);
    const mockedPokemonNames = {
      count: 151,
      next: 'pomme',
      previous: null,
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/'
        },
        {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        {
          name: 'venusaur',
          url: 'https://pokeapi.co/api/v2/pokemon/3/'
        },
        {
          name: 'charmander',
          url: 'https://pokeapi.co/api/v2/pokemon/4/'
        },
        {
          name: 'charmeleon',
          url: 'https://pokeapi.co/api/v2/pokemon/5/'
        }]};
    service.getAllPokemon().subscribe(
      (pokemonNames: PokemonName[]) => {
        expect(pokemonNames.length).toBe(5);
        expect(pokemonNames[0]).toBe({name: 'bulbasaur'});
      },
      error => error
    );

    http.expectOne('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').flush(mockedPokemonNames);
  });

  it('should test the return to get a specific pokemon', () => {
    const http = TestBed.inject(HttpTestingController);
    const mockedPokemon = PokemonResponse;
    const pokemonResult = PokemonResultForGetAPokemon;
    const pokemonName = 'squirtle';
    service.getAPokemon(pokemonName).subscribe(
      (pokemon: Pokemon) => {
        expect(pokemon).toBe(pokemonResult);
      },
      error => error
    );

    http.expectOne(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).flush(mockedPokemon);
  });


  it('should test the return of getMoveValue of an mega-punch attack from squirtle', () => {
    const http = TestBed.inject(HttpTestingController);
    const mockedAttack = {power: 80};
    service.getMoveValue('https://pokeapi.co/api/v2/move/5/').subscribe(
      (valueAttack: number) => {
        expect(valueAttack).toBe(80);
      },
      error => error
    );

    http.expectOne('https://pokeapi.co/api/v2/move/5/').flush(mockedAttack);
  });
});
