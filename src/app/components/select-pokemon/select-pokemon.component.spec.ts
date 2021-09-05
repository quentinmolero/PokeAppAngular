import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';

import { SelectPokemonComponent } from './select-pokemon.component';

describe('selectComponent', () => {
  let component: SelectPokemonComponent;
  let fixture: ComponentFixture<SelectPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPokemonComponent, ListPokemonComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
