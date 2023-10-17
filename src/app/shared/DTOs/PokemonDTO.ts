export class PokemonDTO {
  public id: number = 0
  public name: string = ''
  public image: string = ''
  public type: string = ''

  constructor(id: number, name: string, image: string, type: string){
    this.id = id
    this.name = name
    this.image = image
    this.type = type
  }
}
