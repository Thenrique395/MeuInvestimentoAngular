import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-investimentos',
  templateUrl: './listar-investimentos.component.html',
  styleUrls: ['./listar-investimentos.component.css']
})
export class ListarInvestimentosComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  carteira = [
    {
      id: 1,
      codigo: "MDIA3",
      empresa: "M. Dias Branco",
      tipo: "ORD",
      valor: 10,
      quantidade: 100,
      valorTotalCarteira: 1000,
      status: true
    },
    {
      id: 2,
      codigo: "BBAS3",
      empresa: "Banco do Brasil",
      tipo: "ORD",
      valor: 10,
      quantidade: 100,
      valorTotalCarteira: 1000,
      status: false
    },
    {
      id: 3,
      codigo: "BBAS3",
      empresa: "Banco do Brasil",
      tipo: "ORD",
      valor: 10,
      quantidade: 100,
      valorTotalCarteira: 1000,
      status: false
    }
  ];


}
