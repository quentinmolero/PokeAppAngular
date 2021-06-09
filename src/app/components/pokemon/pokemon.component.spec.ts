import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import {Pokemon} from '../../models/pokemon';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let view: any;

  const carapuce = new Pokemon({
    name: 'carapuce',
    color: 'blue',
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
    color: 'yellow',
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
    view = fixture.debugElement.nativeElement;
    component.pokemon = carapuce;
    component.position = 'left';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
