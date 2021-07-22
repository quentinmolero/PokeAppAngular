import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Pokemon} from '../../models/pokemon';
import {getAllPokemonResponse, getAPokemonResponse, getMoveValueDetail, PokemonMove, PokemonName} from './pokeApi.type';
import {map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListPokemonService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllPokemon(): Observable<PokemonName[]> {
    return this.http.get<getAllPokemonResponse>(`${this.baseUrl}pokemon?limit=151&offset=0`, this.httpOptions)
      .pipe(
        map((data: getAllPokemonResponse): PokemonName[] => data.results)
      );
  }


  public getAPokemon(name: string): Observable<Pokemon> {
    return this.http.get<getAPokemonResponse>(`${this.baseUrl}pokemon/${name}`, this.httpOptions)
      .pipe(
        map((data: getAPokemonResponse): Pokemon => {
          const health = data.stats.filter(stat => stat.stat.name === 'hp');
          const speed = data.stats.filter(stat => stat.stat.name === 'speed');
          const healthValue = health.length > 0 ? health[0].base_stat :  0;
          const typeValue = data.types.length > 0 ? data.types[0].type.name : 'normal';
          const speedValue = speed.length > 0 ? speed[0].base_stat : 0;
          const numberDataMoveTaken = data.moves.length >= 4 ? 4 : data.moves.length;
          const moves = data.moves.slice(0, numberDataMoveTaken).map((move: PokemonMove) => {
            return {name: move.move.name, detailUrl: move.move.url, value: 10};
          });

          return new Pokemon({
            name, health: healthValue, maxHealth: healthValue, type: typeValue, speed: speedValue, attacks: moves
          });
        })
      );
  }

  public setMoveValueFromPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return forkJoin(pokemon.attacks.map(attack => {
      if (attack.detailUrl) {

        this.getMoveValue(attack.detailUrl).subscribe(
          data => {
            attack.value = data;
            return pokemon;
          },
          error => console.log(error)
        );
      }
    }));
  }

  public getMoveValue(url: string): Observable<number> {
    return this.http.get<getMoveValueDetail>(`${url}`, this.httpOptions)
      .pipe(
        map(
          (data: getMoveValueDetail) => data.power
        )
      );
  }



}
