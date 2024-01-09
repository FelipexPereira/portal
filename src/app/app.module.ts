import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoButtonModule, PoFieldModule, PoMenuModule, PoMenuPanelModule, PoModule, PoNotificationModule, PoPageModule, PoSelectComponent, PoTableModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoPageLoginModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorModule } from './interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    EstoqueComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    InterceptorModule,
    RouterModule.forRoot([]),
    PoPageModule,
    PoTemplatesModule,
    PoMenuPanelModule,
    PoPageLoginModule,
    PoTableModule,
    PoMenuModule,
    PoFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PoButtonModule,
    PoNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
