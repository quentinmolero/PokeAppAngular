import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LogsFight} from '../../models/logs';
import {Pokemon} from '../../models/pokemon';
import {BattleService} from '../../services/battle.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() logsFight: LogsFight[] | undefined;
  @Input() pokemonWinner: Pokemon | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
