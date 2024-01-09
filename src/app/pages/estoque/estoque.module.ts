import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoFieldModule, PoMenuModule, PoMenuPanelModule, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarItemComponent } from './cadastrar-item/cadastrar-item.component';



@NgModule({
  declarations: [CadastrarItemComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoTemplatesModule,
    PoMenuPanelModule,
    PoPageLoginModule,
    PoTableModule,
    PoMenuModule,
    PoFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EstoqueModule { }
