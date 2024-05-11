import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PensamentoComponent} from "../pensamento/pensamento.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink,
    PensamentoComponent,
    NgForOf,
    NgIf
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

    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis imperdiet eros. Suspendisse a nisl consectetur tellus semper efficitur. Donec tincidunt, nibh a placerat pharetra, orci justo molestie purus, ac porta augue velit quis lacus. Ut tristique lacus dolor, quis tristique dui finibus eget. Nulla scelerisque bibendum urna eu volutpat. Cras sed dignissim sem. Pellentesque eu dui pulvinar, varius arcu dictum, pharetra turpis. Sed tristique aliquam porta. Pellentesque ullamcorper nec mauris at varius. Sed sapien massa, egestas ornare congue sit amet, mollis eget mi. Donec gravida lacus metus, non vestibulum dui aliquam a. Ut lacus justo, ullamcorper nec sapien at, tempor ullamcorper sapien. ',
      autoria: 'Componente filho',
      modelo: ''
    }
  ]

}
