import { Component, Input } from '@angular/core'

import { PokemonDTO } from '../DTOs/PokemonDTO'
import { PokeDataService } from 'src/app/services/poke-data.service'

@Component({
  selector: 'app-card-pokemon-list',
  templateUrl: './card-pokemon-list.component.html',
  styleUrls: ['./card-pokemon-list.component.scss'],
  providers: [PokeDataService],
})
export class CardPokemonListComponent {
  @Input() filtro: any
  pokemons: PokemonDTO[] = []
  pokemonFiltrado: PokemonDTO[] = []

  constructor(private pokeDataService: PokeDataService) {}
  async getPokemons() {
    if (!this.filtro) {
      try {
        const totalPokemon = 150;
        const ids = Array.from({ length: totalPokemon }, (_, i) => i + 1);
        const retornoApi = await Promise.all(
          ids.map((id) => this.pokeDataService.getPokemonById(id))
        )
        retornoApi.forEach((poke) => {
          const pokemonType: string = poke.types
            .map((poke: any) => poke.type.name)
            .join(', ')
          const pokemonDto = new PokemonDTO(
            poke.id,
            poke.name,
            poke.sprites.front_default,
            pokemonType
          )
          this.pokemons.push(pokemonDto);
        })
      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      }
    }
  }

  async ngOnChanges(): Promise<void> {
    this.pokemonFiltrado = []
    if (this.filtro) {
      const retornoApi = await this.pokeDataService.getPokemonByName(
        this.filtro
      )

      const pokemonType: string = retornoApi.types
        .map((poke: any) => poke.type.name)
        .join(', ');
      const pokemonDto = new PokemonDTO(
        retornoApi.id,
        retornoApi.name,
        retornoApi.sprites.front_default,
        pokemonType
      )
      this.pokemonFiltrado.push(pokemonDto);
    }
  }

  ngOnInit():void {
    this.getPokemons()
  }
}
