import {Component, Input, OnInit} from '@angular/core';
import {LogsFight} from '../../models/logs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() logsFight: LogsFight[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
