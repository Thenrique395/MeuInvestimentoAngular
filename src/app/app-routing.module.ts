import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInvestimentosComponent } from './components/listar-investimentos/listar-investimentos.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent , canActivate : [AuthGuard]},
  { path: 'listar', component: ListarInvestimentosComponent },
  // { path: 'addproduto/:id', component: AddProdutoComponent , canActivate : [AuthGuard]},
  // { path: 'login', component: LoginComponent },
  // { path: 'singin', component: SingInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
