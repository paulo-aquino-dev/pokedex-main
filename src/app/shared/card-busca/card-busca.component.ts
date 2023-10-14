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
  @Input() image: string = ""
  constructor() {}
  ngOnInit() {
    console.log(`ID ${this.id} || NOME ${this.name}`)
  }
}
