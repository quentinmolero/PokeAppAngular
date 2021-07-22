import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPokemonNameColor]'
})

export class PokemonNameColorDirective implements OnInit{
  @Input() appPokemonNameColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'color', this.appPokemonNameColor);
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.appPokemonNameColor);
  }
}
