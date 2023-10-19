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
  image: string = ""
  constructor() {}

  ngOnInit() {
    this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
  }
}
