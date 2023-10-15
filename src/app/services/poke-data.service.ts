import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})

export class PokeDataService {
  pokemons: any[] = [];
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl

  getData(url: string) {
    return this.http.get(url);
  }

  async getPokemons(id: number): Promise<any>{
    const response =  await fetch(`${this.baseUrl}pokemon/${id}`)
    const data = await response.json()
    return data
  }

  carregarPokemons() {
     return this.http.get<any>(`https://pokeapi.co/api/v2/type/ground`)
      //.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  }

  // async carregarPokemons() {
  //   const requisicao = await this.http
  //     .get<any>(`https://pokeapi.co/api/v2/type/ground`)
  //     //.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  //     .toPromise();
  //   this.pokemons = requisicao.results;
  // }
}
