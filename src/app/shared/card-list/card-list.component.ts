import { Component } from '@angular/core';
import { PokeDataService } from 'src/app/services/poke-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [PokeDataService],
})
export class CardListComponent {
  pokemons: any[] = [];

  constructor(private pokeDataService: PokeDataService) {}
  async getPokemons() {
    try {
      const totalPokemon = 150
      const ids = Array.from({ length: totalPokemon }, (_, i) => i + 1)
      const retornoApi = await Promise.all(ids.map((id) => this.pokeDataService.getPokemonById(id)))
      this.pokemons.push(...retornoApi)
    } catch (error) {
      console.error('Erro ao chamar a API:', error)
    }
  }

  ngOnInit() {
    this.getPokemons();
  }
}
