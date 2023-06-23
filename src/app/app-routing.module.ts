import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DetalharComponent } from './detalhar/detalhar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listar', component:ListarComponent},
  {path:'listar/excluir', component:ExcluirComponent},
  {path:'listar/detalhar', component:DetalharComponent},
  {path:'listar/cadastrar', component:CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
