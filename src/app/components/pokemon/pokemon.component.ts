import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() position!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
