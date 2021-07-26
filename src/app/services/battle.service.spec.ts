import {TestBed} from '@angular/core/testing';

import {BattleService} from './battle.service';
import {Pokemon} from '../models/pokemon';

describe('BattleService', () => {
  let service: BattleService;
  let pikachu: Pokemon;
  let papilusion: Pokemon;

  beforeEach(() => {
    jest.setTimeout(30_000);
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleService);
    papilusion = new Pokemon({
      name: 'papilusion',
      health: 90,
      speed: 20,
      maxHealth: 90,
      type: 'purple',
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
      type: 'yellow',
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
    it('Should return pikachu because papulsion is not stronger enough', async () => {
      await service.handleModificationButtonText(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(pikachu);
    });

    it('Should return papilusion when pikachu have 0 life', async () => {
      pikachu.health = 0;
      await service.handleModificationButtonText(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(papilusion);
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
  });
});
