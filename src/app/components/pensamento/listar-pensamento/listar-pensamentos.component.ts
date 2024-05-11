import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PensamentoComponent} from "../pensamento/pensamento.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    PensamentoComponent,
    NgForOf
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: 'Passo propriedades para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
  ]

}
