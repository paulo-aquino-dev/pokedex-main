import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})

export class PokeDataService {
  pokemons = [];
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl

  getData(url: string) {
    return this.http.get(url);
  }

  async getPokemons(id: number){
    return await this.http.get<any>(`${this.baseUrl}pokemon/${id}`)
  }

  async carregarPokemons() {
    const requisicao = await this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();
    this.pokemons = requisicao.results;
  }
}
