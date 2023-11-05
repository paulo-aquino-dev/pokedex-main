import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '../environments/environments'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PokeDataService {
  pokemons: any[] = []
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {}

  async getPokemonById(id: number): Promise<any>{
    return (await fetch(`${this.baseUrl}pokemon/${id}`)).json()
  }

  async getPokemonByName(name: string): Promise<any>{
    return (await fetch(`${this.baseUrl}pokemon/${name}`)).json()
  }

  getPokemons = (): Observable<Object> =>
    this.http.get(`${this.baseUrl}pokemon?limit=151`)
}
