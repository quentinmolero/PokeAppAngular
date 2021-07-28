import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  pokemonChoose1: string | undefined;
  pokemonChoose2: string | undefined;
  error: string | undefined;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  getPokemonChoose1(pokemon: string): void {
   this.pokemonChoose1 = pokemon;
  }
  getPokemonChoose2(pokemon: string): void {
    this.pokemonChoose2 = pokemon;
  }
  validateChoicePokemon(): void {
    if (this.pokemonChoose1 && this.pokemonChoose2) {
      this.router.navigate([`/battle/${this.pokemonChoose1}/${this.pokemonChoose2}`]);
    }
  }
}
