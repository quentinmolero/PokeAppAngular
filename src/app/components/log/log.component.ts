import {Component, Input, OnInit} from '@angular/core';
import {LogsFight} from '../../models/logs';
import {Pokemon} from '../../models/pokemon';

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
