import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ListPokemonService} from '../../services/poke-api/list-pokemon.service';
import {PokemonName} from '../../services/poke-api/pokeApi.type';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemons: PokemonName[] = [];
  selectedPokemon = '';
  @Output() pokemonChoose: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private listPokemonService: ListPokemonService
  ) {
  }

  ngOnInit(): void {
    this.listPokemonService.getAllPokemon().subscribe(
      (data: PokemonName[]) => this.pokemons = data,
      err => console.log(err)
    );
  }

  public selectPokemon(pokemonName: string): void
  {
    this.selectedPokemon = pokemonName;
    this.pokemonChoose.emit(this.selectedPokemon);
  }
}
