import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from '../../models/pokemon';
import {getAllPokemonResponse, PokemonName} from './pokeApi.type';
import {map, tap} from 'rxjs/operators';

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
    return this.http.get<getAllPokemonResponse>(`${this.baseUrl}/pokemon?limit=151&offset=0`, this.httpOptions)
      .pipe(
        map((data: getAllPokemonResponse): PokemonName[] => data.results)
      );
  }



}
