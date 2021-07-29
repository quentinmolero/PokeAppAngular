import {PokemonNameColorDirective} from './pokemon-name-color.directive';
import {Component, Renderer2, Type} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  template: '<p [appPokemonNameColor]="type">pokemonName</p>'
})
class TestComponent {
  type = '';
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

  it('should be stone', () => {
    fixture.componentInstance.type = 'normal';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(168, 167, 122)');
  });

  it('should be cornflower blue', () => {
    fixture.componentInstance.type = 'water';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(99, 144, 240)');
  });

  it('should be cadmium orange', () => {
    fixture.componentInstance.type = 'fire';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(238, 129, 48)');
  });

  it('should be golden dream', () => {
    fixture.componentInstance.type = 'electric';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(247, 208, 44)');
  });

  it('should be green peas', () => {
    fixture.componentInstance.type = 'grass';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(122, 199, 76)');
  });

  it('should be aqua island', () => {
    fixture.componentInstance.type = 'ice';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(150, 217, 214)');
  });

  it('should be dark pastel red', () => {
    fixture.componentInstance.type = 'fighting';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(194, 46, 40)');
  });

  it('should be medium orchid', () => {
    fixture.componentInstance.type = 'poison';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(163, 62, 161)');
  });

  it('should be apache', () => {
    fixture.componentInstance.type = 'ground';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(226, 191, 101)');
  });

  it('should be dull lavender', () => {
    fixture.componentInstance.type = 'flying';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(169, 143, 243)');
  });

  it('should be warm pink', () => {
    fixture.componentInstance.type = 'psychic';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(249, 85, 135)');
  });

  it('should be pea', () => {
    fixture.componentInstance.type = 'bug';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(166, 185, 26)');
  });

  it('should be brass', () => {
    fixture.componentInstance.type = 'rock';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(182, 161, 54)');
  });

  it('should be dark lavender', () => {
    fixture.componentInstance.type = 'ghost';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(115, 87, 151)');
  });

  it('should be bluish purple', () => {
    fixture.componentInstance.type = 'dragon';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(111, 53, 252)');
  });

  it('should be tobacco brown', () => {
    fixture.componentInstance.type = 'dark';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(112, 87, 70)');
  });

  it('should be casper', () => {
    fixture.componentInstance.type = 'steel';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(183, 183, 206)');
  });

  it('should be dull pink', () => {
    fixture.componentInstance.type = 'fairy';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').style.color).toBe('rgb(214, 133, 173)');
  });
});
