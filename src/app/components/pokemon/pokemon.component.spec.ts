import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import {Pokemon} from '../../models/pokemon';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let dom: any;

  const carapuce = new Pokemon({
    name: 'carapuce',
    type: 'blue',
    health: 80,
    maxHealth: 80,
    speed: 80,
    attacks: [{
      name: 'charge',
      value: 10
    }, {
      name: 'pistolet à eau',
      value: 30
    }, {
      name: 'écume',
      value: 35
    }, {
      name: 'trempette',
      value: 5
    },
    ]}
  );
  const pikachu = new Pokemon({
    name: 'pikachu',
    type: 'yellow',
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
      declarations: [ PokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    component.pokemon = pikachu;
    component.position = 'left';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('PokemonName should be carapuce', () => {
    dom = fixture.nativeElement;
    component.pokemon = carapuce;
    component.position = 'left';
    fixture.detectChanges();
    expect(dom.innerHTML).toContain('<p class="PokemonName">carapuce</p>');
  });

  it('carapuce should have 80 / 80 for HP', () => {
    dom = fixture.nativeElement;
    component.pokemon = carapuce;
    component.position = 'left';
    fixture.detectChanges();
    expect(dom.innerHTML).toContain('<p class="PokemonHealth">80 / 80</p>');
  });

  it('should have the PokemonLeft property if the pokemon position is on the left', () => {
    dom = fixture.nativeElement;
    component.pokemon = carapuce;
    component.position = 'left';
    fixture.detectChanges();
    expect(dom.innerHTML).toContain('<div class="PokemonLeft"');
    expect(dom.innerHTML).toContain('<div class="PokemonInfosLeft"');
  });

  it('should have the PokemonRight property if the pokemon position is on the right', () => {
    dom = fixture.nativeElement;
    component.pokemon = carapuce;
    component.position = 'right';
    fixture.detectChanges();
    expect(dom.innerHTML).toContain('<div class="PokemonRight"');
    expect(dom.innerHTML).toContain('<div class="PokemonInfosRight"');
  });
});
