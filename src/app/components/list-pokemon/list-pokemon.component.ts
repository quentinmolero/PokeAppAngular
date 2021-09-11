import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {ListPokemonService} from '../../services/poke-api/list-pokemon.service';
import {PokemonName} from '../../services/poke-api/pokeApi.type';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit, AfterViewInit {
  pokemons: PokemonName[] = [];
  selectedPokemon = '';
  @Output() pokemonChoose: EventEmitter<string> = new EventEmitter<string>();
  //@ts-ignore
  @ViewChild('mesPoke',  {static: false}) mesPoke: ElementRef;
  heightPokemonDiv: number = 0;

  constructor(
    private listPokemonService: ListPokemonService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.listPokemonService.getAllPokemon().subscribe(
      (data: PokemonName[]) => {
        this.pokemons = data,
        this.changeDetectorRef.detectChanges();
        this.heightPokemonDiv = this.mesPoke.nativeElement.offsetHeight;
        console.log(this.heightPokemonDiv);
      },
      err => console.log(err)
    );
  }

  public selectPokemon(pokemonName: string): void
  {
    this.selectedPokemon = pokemonName;
    this.pokemonChoose.emit(this.selectedPokemon);
  }
}
