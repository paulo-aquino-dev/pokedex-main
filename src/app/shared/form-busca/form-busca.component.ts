import { PokemonDTO } from "../DTOs/PokemonDTO";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PokeDataService } from 'src/app/services/poke-data.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
  providers: [PokeDataService],
})
export class FormBuscaComponent {
  pokemonForm = new FormControl('');
  pokemons: PokemonDTO[] = [];
  filteredPokemons: Observable<any[]>;
  pokemonNome = ''
  @Output() filtro = new EventEmitter<string>()
  constructor() {
    this.filteredPokemons = this.pokemonForm.valueChanges.pipe(
      startWith(''),
      map((poke) => (poke ? this._filterPokemon(poke) : this.pokemons.slice()))
    );
  }

  private _filterPokemon(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(filterValue)
    );
  }

  async getPokemons() {
    const getPokemon = async (id: number): Promise<void> => {
      const data: Response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const poke: any = await data.json();
      const pokemonType: string = poke.types
        .map((poke: any) => poke.type.name)
        .join(', ');
      const pokemon = new PokemonDTO(
        poke.id,
        poke.name,
        this.pegarImagemPokemon(poke.id),
        pokemonType)
      this.pokemons.push(pokemon);
    };
    for (let i = 1; i <= 150; i++) {
      getPokemon(i);
    }
  }

  ngOnInit() {
    this.getPokemons();
  }

  filtrarPorNome(){
    this.filtro.emit(this.pokemonNome)
  }

  limparFiltro(){
    this.pokemonNome = ''
    this.filtrarPorNome()
  }

  pegarImagemPokemon(id:number) {
    const numeroFormatado = this.leadingZero(id);

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
