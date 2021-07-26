import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BattleComponent} from './battle.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PokemonComponent} from '../pokemon/pokemon.component';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BattleComponent,
        PokemonComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 2 pokemons', () => {
    expect(component).toBeTruthy();
  });
});
