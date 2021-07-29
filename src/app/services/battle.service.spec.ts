import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';
import {IPokemon, Pokemon} from '../models/pokemon';
import {LogsFight} from '../models/logs';

describe('BattleService', () => {
  let service: BattleService;
  let pikachu: Pokemon;
  let papilusion: Pokemon;

  beforeEach(() => {
    jest.setTimeout(30_000);
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleService);
    service.fightContinue = true;
    service.pokemonWinner = undefined;
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


  describe('test startFight method', () => {
    it('Should return pikachu because papilusion is not stronger enough', async () => {
      await service.startFight(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(pikachu);
    });

    it('Should return papilusion when pikachu have 0 life', async () => {
      pikachu.health = 0;
      await service.startFight(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(papilusion);
    });

    it('Should return nothing because fightContinue variable is at false', async () => {
      service.fightContinue = false;
      await service.startFight(pikachu, papilusion);
      expect(service.pokemonWinner).toBe(undefined);
    });

    it('Should return error when papilusion and pikachu have both 0 life',   async () => {

      pikachu.health = 0;
      papilusion.health = 0;
      expect.assertions(1);
      try {
        await service.startFight(pikachu, papilusion);
      }catch (e) {
        expect(e).toEqual({name: 'PokemonsNoLifeException', message: 'Pokemon can\'t figth because they are dead'});
      }
    });
  });

  describe('test clear Logs of the fight', () => {
    it('test to clear logs and pokemonWinner', () => {
      service.pokemonWinner = papilusion;
      service.logsFight = [new LogsFight({
        pokemonTarget: papilusion,
        pokemonAttack: pikachu,
        attack: {
          name: 'eclair',
          value: 30
        },
        date: new Date()
      })];
      service.clearLogsFight();
      expect(service.pokemonWinner).toBe(undefined);
      expect(service.logsFight).toEqual([]);
    });
  });

  describe('test to change fight status method', () => {
    it('test to change fight status to move fightContinue true to false', () => {
      service.changeFightStatus();
      expect(service.fightContinue).toBe(false);
    });

    it('test to change fight status to move fightContinue false to true', () => {
      service.fightContinue = false;
      service.changeFightStatus();
      expect(service.fightContinue).toBe(true);
    });
  });

  describe('test to clear pokemonCustom', () => {
    it('test to clear pokemonCustom when it\'s filed', () => {
      service.pokemonsCustom.push(pikachu);
      service.pokemonsCustom.push(papilusion);
      service.clearPokemonsCustom();
      expect(service.pokemonsCustom).toEqual([]);
    });
  });
});
