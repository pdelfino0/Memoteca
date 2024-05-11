import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {

}
