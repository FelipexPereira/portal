import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: PagesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'estoque', component: EstoqueComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
