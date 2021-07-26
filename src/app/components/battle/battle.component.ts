import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {BattleService} from '../../services/battle.service';
import {ListPokemonService} from '../../services/poke-api/list-pokemon.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  buttonText = 'Play Fight';
  public firstPokemon: Pokemon | undefined;
  private firstPokemonName: string | undefined;
  public secondPokemon: Pokemon | undefined;
  private secondPokemonName: string | undefined;

  constructor(
    public battleService: BattleService,
    private listPokemonService: ListPokemonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.firstPokemonName = params.firstPokemonName;
    });
    this.route.params.subscribe((params: Params): void => {
      this.secondPokemonName = params.secondPokemonName;
    });
    if (this.firstPokemonName !== undefined) {
      this.listPokemonService.getAPokemon(this.firstPokemonName).subscribe(
        pokemon => this.firstPokemon = pokemon
      );
    }
    if (this.secondPokemonName !== undefined) {
      this.listPokemonService.getAPokemon(this.secondPokemonName).subscribe(
        pokemon => this.secondPokemon = pokemon
      );
    }
  }

  public async handlePlayClick(): Promise<void> {
    if (this.firstPokemon !== undefined && this.secondPokemon) {
      if (this.buttonText === 'Play Fight') {
        this.buttonText = 'Stop Fight';
        await this.battleService.handleModificationButtonText(this.firstPokemon, this.secondPokemon);
      }else {
        this.buttonText = 'Play Fight';
      }
    }
  }
}
