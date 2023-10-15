import { PokeDataService } from '../../services/poke-data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
  providers:[PokeDataService]
})

export class CardBuscaComponent {
  @Input() id: number = 0
  @Input() name: string = ""
  image: string = ""
  constructor() {}

  ngOnInit() {
    this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
  }
}
