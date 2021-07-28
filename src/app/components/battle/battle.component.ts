import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {BattleService} from '../../services/battle.service';
import {ListPokemonService} from '../../services/poke-api/list-pokemon.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscriber, Subscription} from 'rxjs';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit, OnDestroy {
  buttonText = 'Play Fight';
  public firstPokemon: Pokemon | undefined;
  private firstPokemonName: string | undefined;
  public secondPokemon: Pokemon | undefined;
  private secondPokemonName: string | undefined;
  private subscriptionRoute: Subscription | undefined;
  private subscriptionRouteForSecondPokemon: Subscription | undefined;

  constructor(
    public battleService: BattleService,
    private listPokemonService: ListPokemonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscriptionRoute = this.route.params.subscribe((params: Params): void => {
      this.firstPokemonName = params.firstPokemonName;
    });
    this.subscriptionRouteForSecondPokemon = this.route.params.subscribe((params: Params): void => {
      this.secondPokemonName = params.secondPokemonName;
    });

    if (this.battleService.pokemonsCustom[0]) {
      this.firstPokemon = this.battleService.pokemonsCustom[0];
      console.log(this.firstPokemon);
    }
    else if (this.firstPokemonName !== undefined) {
      this.listPokemonService.getAPokemon(this.firstPokemonName).subscribe(
        pokemon => this.firstPokemon = pokemon
      );
    }

    if (this.battleService.pokemonsCustom[1]) {
      this.secondPokemon = this.battleService.pokemonsCustom[1];
      console.log(this.firstPokemon);
    }
    else if (this.secondPokemonName !== undefined) {
      this.listPokemonService.getAPokemon(this.secondPokemonName).subscribe(
        pokemon => this.secondPokemon = pokemon
      );
    }
  }

  public async handlePlayClick(): Promise<void> {
    if (this.firstPokemon !== undefined && this.secondPokemon) {
      if (this.buttonText === 'Play Fight') {
        this.buttonText = 'Stop Fight';
        this.battleService.changeFightStatus();
        await this.battleService.startFight(this.firstPokemon, this.secondPokemon);
      }else {
        this.buttonText = 'Play Fight';
        this.battleService.changeFightStatus();
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptionRoute?.unsubscribe();
    this.subscriptionRouteForSecondPokemon?.unsubscribe();
    if(this.battleService.fightContinue === true)
      this.battleService.changeFightStatus();
    this.battleService.clearLogsFight();
    if (this.battleService.pokemonsCustom.length > 0)
      this.battleService.clearPokemonsCustom();
  }
}
