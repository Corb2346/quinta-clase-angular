import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

public pokemon$: Observable<any>;

  constructor( public pokemons: RequestService) {
    this.pokemon$ = this.pokemons.getPokemon().pipe(
      tap(resp => {
        console.log(resp);
      })
    )
   }

  ngOnInit(): void {
  }

}
