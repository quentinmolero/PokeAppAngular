import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BattleService} from '../../services/battle.service';
import {Pokemon} from '../../models/pokemon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private battleService: BattleService,
    private router: Router
  ) { }

  createPokemons: FormGroup = this.formBuilder.group({
    name1: ['', [Validators.required]],
    name2: ['', [Validators.required]],
    speed1: ['', [Validators.required]],
    speed2: ['', [Validators.required]],
    health1: ['', [Validators.required]],
    health2: ['', [Validators.required]],
    attack_name1: ['', [Validators.required]],
    attack_name2: ['', [Validators.required]],
    attack_value1: ['', [Validators.required]],
    attack_value2: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  registerPokemons(): void {
    if (this.createPokemons.invalid && !this.createPokemons.dirty) {
      return;
    }
    this.battleService.pokemonsCustom.push(new Pokemon({
      id: undefined,
      name: this.createPokemons.get('name1')?.value as string,
      speed: this.createPokemons.get('speed1')?.value,
      health: this.createPokemons.get('health1')?.value,
      attacks: [{name: this.createPokemons.get('attack_name1')?.value as string, value: this.createPokemons.get('attack_value1')?.value}],
      type: 'normal',
      maxHealth: this.createPokemons.get('health1')?.value,
    }));

    this.battleService.pokemonsCustom.push(new Pokemon({
      id: undefined,
      name: this.createPokemons.get('name2')?.value,
      speed: this.createPokemons.get('speed2')?.value,
      health: this.createPokemons.get('health2')?.value,
      attacks: [{name: this.createPokemons.get('attack_name2')?.value as string, value: this.createPokemons.get('attack_value2')?.value}],
      type: 'normal',
      maxHealth: this.createPokemons.get('health2')?.value,
    }));

    this.router.navigate(['/battleCustom']);
  }

}
