import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDados } from '../../models/pokemonDados';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,HttpClientModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  pokemon :PokemonDados = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }

  //Injetando o Service no Component, não precisa nem declarar que já pode usar
  constructor(private servicePoke: PokemonServiceService){
  }

  //Recebendo informações da API
  ngOnInit(): void {
    this.recebendoPokemon('pikachu')
  }

  //Lendo Pokemon da barra de pesquisa
  recebendoPokemon(nomeRecebido:string){
    this.servicePoke.getPokemon(nomeRecebido).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types

          }
        },
        error: (err) => console.log('not found')
      }
    )
  }
}
