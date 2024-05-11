import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  larguraPensamento(): string{
    return this.pensamento.conteudo.length> 256 ? 'pensamento-g' : 'pensamento-p'
  }
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }


}
