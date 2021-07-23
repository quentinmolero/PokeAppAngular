import { TestBed } from '@angular/core/testing';

import { ListPokemonService } from './list-pokemon.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ListPokemonService', () => {
  let service: ListPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListPokemonService]
    });
    service = TestBed.inject(ListPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
