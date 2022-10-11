import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/libs/entity/drink.interface';
import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  public drinks: Drink[] = [];

  constructor(public requestService : RequestService) { }

  ngOnInit(): void {
    this.requestService.getbebida('margarita').subscribe({
      next: resp =>{
        console.log(resp);
        this.drinks = resp
    }})
  }

}
