import { PokeDataService } from '../../services/poke-data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
  providers:[PokeDataService]
})

export class CardPokemonComponent {
  @Input() id: number = 0
  @Input() name: string = ""
  @Input() type: string = ""
  types: string[] = []
  pokemonTypeStyle: string = 'type-icon type-'
  constructor() {}

  ngOnInit() {
    this.types = this.type.split(",", 2)
    console.log('types', this.types)
  }

  public pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.id);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
