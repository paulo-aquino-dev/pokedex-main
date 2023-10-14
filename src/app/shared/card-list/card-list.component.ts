import { Component, Input } from '@angular/core';
import { PokeDataService } from 'src/app/services/poke-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers:[PokeDataService]
})

export class CardListComponent {
  pokemons: any[] = []

  constructor(private pokeDataService: PokeDataService){}
    async getPokemons(): Promise<void> {
    for(let i = 1; i <= 100 ; i++){
      (await this.pokeDataService.getPokemons(i)).subscribe(
        res => {
          this.pokemons.push(res)
        },
        err =>{
        }
      )
    }
    // this.pokemons.sort((a, b) => a.id.rendered.localeCompare(b.id.rendered));
    console.log(this.pokemons)
  }

  ngOnInit() {
    this.getPokemons();
  }
}
