import { PokemonNameColorDirective } from './pokemon-name-color.directive';
import {Component, Renderer2, Type} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  template: '<p [appPokemonNameColor]="\'blue\'">pokemonName</p>'
})
class TestComponent {
}

describe('PokemonNameColorDirective', () => {
  let renderer2: Renderer2;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [Renderer2],
      declarations: [TestComponent, PokemonNameColorDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
  });

  it('should create an instance', () => {
    const directive = new PokemonNameColorDirective(fixture, renderer2);
    expect(directive).toBeTruthy();
  });

  it('should be blue', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('blue');
  });
});
