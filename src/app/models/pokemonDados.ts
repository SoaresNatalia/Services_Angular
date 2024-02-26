export type PokemonDados = {
  name:string
  id:number
  sprites: {
    front_default: string
  }
  types:{
    slot:number
    type:{name:string, url: string}
  }[]
}
