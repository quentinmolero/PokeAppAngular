import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPokemonNameColor]'
})

export class PokemonNameColorDirective implements OnInit{
  private color: string | undefined;

  @Input() appPokemonNameColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.evaluateColor();
    renderer.setStyle(element.nativeElement, 'color', this.color);
  }
  ngOnInit(): void {
    this.evaluateColor();
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
  evaluateColor(): void {
    if (this.appPokemonNameColor === 'normal') {
      this.color = '#A8A77A';
    } else if (this.appPokemonNameColor === 'fire') {
      this.color = '#EE8130';
    } else if (this.appPokemonNameColor === 'water') {
      this.color = '#6390F0';
    } else if (this.appPokemonNameColor === 'electric') {
      this.color = '#F7D02C';
    } else if (this.appPokemonNameColor === 'grass') {
      this.color = '#7AC74C';
    } else if (this.appPokemonNameColor === 'ice') {
      this.color = '#96D9D6';
    } else if (this.appPokemonNameColor === 'fighting') {
      this.color = '#C22E28';
    } else if (this.appPokemonNameColor === 'poison') {
      this.color = '#A33EA1';
    } else if (this.appPokemonNameColor === 'ground') {
      this.color = '#E2BF65';
    } else if (this.appPokemonNameColor === 'flying') {
      this.color = '#A98FF3';
    } else if (this.appPokemonNameColor === 'psychic') {
      this.color = '#F95587';
    } else if (this.appPokemonNameColor === 'bug') {
      this.color = '#A6B91A';
    } else if (this.appPokemonNameColor === 'rock') {
      this.color = '#B6A136';
    } else if (this.appPokemonNameColor === 'ghost') {
      this.color = '#735797';
    } else if (this.appPokemonNameColor === 'dragon') {
      this.color = '#6F35FC';
    } else if (this.appPokemonNameColor === 'dark') {
      this.color = '#705746';
    } else if (this.appPokemonNameColor === 'steel') {
      this.color = '#B7B7CE';
    } else if (this.appPokemonNameColor === 'fairy') {
      this.color = '#D685AD';
    }
  }
}
