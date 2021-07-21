import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';
import {IPokemon, Pokemon} from '../models/pokemon';
import MockInstance = jest.MockInstance;

describe('BattleService', () => {
  let service: BattleService;
  let pikachu: Pokemon;
  let papilusion: Pokemon;

  beforeEach(() => {
    jest.setTimeout(30_000);
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleService);
    service.buttonText = 'Play Fight';
    papilusion = new Pokemon({
      name: 'papilusion',
      health: 90,
      speed: 20,
      maxHealth: 90,
      color: 'purple',
      attacks: [
        {
          name: 'charge',
          value: 5
        },
        {
          name: 'cru-aile',
          value: 30
        },
        {
          name: 'charge',
          value: 5
        },
        {
          name: 'cru-aile',
          value: 30
        },
      ]}
    );

    pikachu = new Pokemon({
      name: 'pikachu',
      health: 80,
      speed: 70,
      maxHealth: 80,
      color: 'yellow',
      attacks: [
        {
          name: 'eclair',
          value: 30
        },
        {
          name: 'charge',
          value: 30
        },
        {
          name: 'eclair',
          value: 30
        },
        {
          name: 'charge',
          value: 30
        },
      ]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('test handleModificationButtonText method', () => {
    it('Should return pikachu beacause papulsion is not stronger enough', async () => {
      await service.handleModificationButtonText(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(pikachu);
      expect(service.buttonText).toBe('Stop Fight');
    });

    it('Should return pikachu beacause papilusion is not stronger enough', async () => {
      await service.handleModificationButtonText(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(pikachu);
      expect(service.buttonText).toBe('Stop Fight');
    });

    it('Should return papilusion when pikachu have 0 life', async () => {
      pikachu.health = 0;
      await service.handleModificationButtonText(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(papilusion);
      expect(service.buttonText).toBe('Stop Fight');
    });

    it('Should return error when papilusion and pikachu have both 0 life',   async () => {

      pikachu.health = 0;
      papilusion.health = 0;
      expect.assertions(1);
      try {
        await service.handleModificationButtonText(pikachu, papilusion);
      }catch (e) {
        expect(e).toEqual({name: 'PokemonsNoLifeException', message: 'Pokemon can\'t figth because they are dead'});
      }
    });

    it('pokemonWinner should be unchanged because button text is at Stop Fight',   async () => {
      service.pokemonWinner = papilusion;
      service.buttonText = 'Stop Fight';

      await service.handleModificationButtonText(pikachu, papilusion);

      expect(service.pokemonWinner).toBe(papilusion);
      expect(service.buttonText).toBe('Play Fight');

    });
  });


});
