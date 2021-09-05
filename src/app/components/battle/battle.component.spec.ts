import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {BattleComponent} from './battle.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PokemonComponent} from '../pokemon/pokemon.component';
import { ActivatedRoute } from '@angular/router';
import { ListPokemonService } from '../../services/poke-api/list-pokemon.service';
import {BattleService} from '../../services/battle.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LogComponent } from '../log/log.component';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(fakeAsync( () => {
    TestBed.configureTestingModule({
      declarations: [
        BattleComponent,
        PokemonComponent,
        LogComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [{provide: ActivatedRoute, useValue: {
        params: of({firstPokemonName: "pokemon1", secondPokemonName: "pokemon2"})
      }}, 
      {provide: ListPokemonService}, 
      {provide: BattleService}]
    })
    .compileComponents();
  }));

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
