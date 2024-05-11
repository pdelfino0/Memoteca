import {Routes} from '@angular/router';
import {CriarPensamentoComponent} from "./components/pensamento/criar-pensamento/criar-pensamento.component";
import {ListarPensamentosComponent} from "./components/pensamento/listar-pensamento/listar-pensamentos.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentosComponent
  }
];
