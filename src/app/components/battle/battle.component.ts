import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {Turn} from '../../game/turn';
import {LogsFight} from '../../models/logs';
import {BattleService} from '../../services/battle.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  carapuce = new Pokemon({
    maxHealth: 80,
    name: 'carapuce',
    health: 80,
    speed: 80,
    color: 'blue',
    attacks: [
      {
        name: 'charge',
        value: 10
      },
      {
        name: 'pisotlet à eau',
        value: 30
      },
      {
        name: 'ecume',
        value: 35
      },
      {
        name: 'trempette',
        value: 5
      },
    ]}
  );

  pikachu = new Pokemon({
    maxHealth: 80,
    name: 'pikachu',
    health: 80,
    speed: 70,
    color: 'yellow',
    attacks: [
      {
        name: 'charge',
        value: 10
      },
      {
        name: 'eclair',
        value: 30
      },
      {
        name: 'fatal Tonerre',
        value: 35
      },
      {
        name: 'griffe',
        value: 5
      },
    ]}
  );

  constructor(public battleService: BattleService) { }

  ngOnInit(): void {
  }

  public async handlePlayClick(): Promise<void> {

    await this.battleService.handleModificationButtonText(this.pikachu, this.carapuce);
  }
}
