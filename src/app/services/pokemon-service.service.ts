import { Injectable } from '@angular/core';
import { enviroment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDados } from '../models/pokemonDados';

//Conteudo Injetavel, injeção de dependencias
//Pode injetar o Service em um Component

@Injectable({
  providedIn: 'root'
})

export class PokemonServiceService {

  private ApiURL :string= enviroment.pokeApi

  //Tipando esta variavel com o tipo PokemonDados que define um nome e um ID
  //Como não sei o que vai retornar da API, uso o tipo ANY
  private pokeDados :PokemonDados | any

  constructor(private http: HttpClient) { }

  //Pegando Informações do Pokemon na API
  //Observable é parecido com uma Promise e Fica vigiando um tipo, no caso o tipo criado PokemonDados
  getPokemon(pokemonName :string):Observable<PokemonDados>{

    this.pokeDados= this.http.get<PokemonDados>(`${this.ApiURL}${pokemonName}`)

    return this.pokeDados
  }
}
