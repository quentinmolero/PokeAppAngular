import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './log.component';
import {Pokemon} from '../../models/pokemon';
import {LogsFight} from '../../models/logs';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;
  let view: any;
  const carapuce = new Pokemon({
    name: 'carapuce',
    health: 80,
    speed: 80,
    attacks: [{
        name: 'charge',
        value: 10
      }, {
        name: 'pisotlet à eau',
        value: 30
      }, {
        name: 'ecume',
        value: 35
      }, {
        name: 'trempette',
        value: 5
      },
    ]}
  );
  const pikachu = new Pokemon({
    name: 'pikachu',
    health: 80,
    speed: 70,
    attacks: [{
        name: 'charge',
        value: 10
      }, {
        name: 'eclair',
        value: 30
      }, {
        name: 'fatal Tonerre',
        value: 35
      }, {
        name: 'griffe',
        value: 5
      },
    ]}
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    view = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty when no fight has to be logged', () => {
    fixture.detectChanges();
    view = view.querySelector('.battleLogDiv');
    expect(view.innerHTML).toBe('<!--bindings={}-->');
  });

  it('shouldn\'t be empty when 1 combat action was made', () => {
    component.logsFight = [new LogsFight({pokemonAttack: carapuce, pokemonTarget: pikachu, attack: carapuce.attacks[0]})];
    fixture.detectChanges();
    view = view.querySelector('.log');
    expect(view.innerHTML).toBe('<p class="logPokemonName">carapuce</p> used charge against <p class="logPokemonName">pikachu</p> and did <p class="logAttackDamage">10 damages</p>');
  });

  it('shouldn\'t be empty when 3 combat actions was made', () => {
    component.logsFight = [new LogsFight({pokemonAttack: carapuce, pokemonTarget: pikachu, attack: carapuce.attacks[0]})];
    component.logsFight.push(new LogsFight({pokemonAttack: pikachu, pokemonTarget: carapuce, attack: pikachu.attacks[0]}));
    component.logsFight.push(new LogsFight({pokemonAttack: carapuce, pokemonTarget: pikachu, attack: carapuce.attacks[0]}));
    fixture.detectChanges();
    view = view.querySelectorAll('.log');
    expect(view[0].innerHTML).toBe('<p class="logPokemonName">carapuce</p> used charge against <p class="logPokemonName">pikachu</p> and did <p class="logAttackDamage">10 damages</p>');
    expect(view[1].innerHTML).toBe('<p class="logPokemonName">pikachu</p> used charge against <p class="logPokemonName">carapuce</p> and did <p class="logAttackDamage">10 damages</p>');
    expect(view[2].innerHTML).toBe('<p class="logPokemonName">carapuce</p> used charge against <p class="logPokemonName">pikachu</p> and did <p class="logAttackDamage">10 damages</p>');
  });
});
