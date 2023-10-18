import { PokemonDTO } from './../DTOs/PokemonDTO';
import { Component, Input, SimpleChanges } from '@angular/core';
import { PokeDataService } from 'src/app/services/poke-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [PokeDataService],
})
export class CardListComponent {
  @Input() filtro: any;
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
        );
        retornoApi.forEach((poke) => {
          const pokemonType: string = poke.types
            .map((poke: any) => poke.type.name)
            .join(', ');
          const pokemonDto = new PokemonDTO(
            poke.id,
            poke.name,
            poke.sprites.front_default,
            pokemonType
          );
          this.pokemons.push(pokemonDto);
        });
      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      }
    }
  }

  async ngOnChanges(): Promise<void> {
    this.pokemonFiltrado = []
    console.log('value changed', this.filtro);
    console.log('pokemonFiltrado', this.pokemonFiltrado);
    if (this.filtro) {
      const retornoApi = await this.pokeDataService.getPokemonByName(
        this.filtro
      )
      console.log('filtro', retornoApi);
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

  ngOnInit() {
    this.getPokemons();
  }
}
