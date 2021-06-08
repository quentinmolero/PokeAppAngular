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
    maxHealth: 80,
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
    maxHealth: 80,
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
    expect(view.querySelector('.battleLogDiv').innerText).toBe(undefined);
  });

  it('shouldn\'t be empty when 1 combat action was made', () => {
    component.logsFight = [new LogsFight({pokemonAttack: carapuce, pokemonTarget: pikachu, attack: carapuce.attacks[0]})];
    fixture.detectChanges();
    expect(view.querySelector('.log').textContent).toContain('carapuce used charge against pikachu and did 10 damages');
  });

  it('shouldn\'t be empty when 3 combat actions was made', () => {
    component.logsFight = [new LogsFight({pokemonAttack: carapuce, pokemonTarget: pikachu, attack: carapuce.attacks[0]})];
    component.logsFight.push(new LogsFight({pokemonAttack: pikachu, pokemonTarget: carapuce, attack: pikachu.attacks[0]}));
    component.logsFight.push(new LogsFight({pokemonAttack: carapuce, pokemonTarget: pikachu, attack: carapuce.attacks[0]}));
    fixture.detectChanges();
    expect(view.querySelectorAll('.log')[0].textContent).toContain('carapuce used charge against pikachu and did 10 damages');
    expect(view.querySelectorAll('.log')[1].textContent).toContain('pikachu used charge against carapuce and did 10 damages');
    expect(view.querySelectorAll('.log')[2].textContent).toContain('carapuce used charge against pikachu and did 10 damages');
  });

  it('shouldn\'t be in the html while no pokemon won', () => {
    fixture.detectChanges();
    expect(view.querySelector('.logWinner')).toBe(null);
  });

  it('should be in the html when a pokemon won', () => {
    component.pokemonWinner = carapuce;
    fixture.detectChanges();
    expect(view.querySelector('.logWinner').textContent).toContain('carapuce is winning');
  });
});
