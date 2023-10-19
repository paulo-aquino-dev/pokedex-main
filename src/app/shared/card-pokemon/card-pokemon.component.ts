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
  types: string[] =[]
  image: string = ""
  constructor() {}

  ngOnInit() {
    // this.types = this.type.split(",", 2)
    // console.log('types', this.types)
  }
}
