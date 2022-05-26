import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BasicTreeComponent } from './components/basic-tree/basic-tree.component';
import { RelationalDbTreeComponent } from './components/relational-db-tree/relational-db-tree.component';



@NgModule({
  declarations: [
    BasicTreeComponent,
    RelationalDbTreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BasicTreeComponent,
    RelationalDbTreeComponent
  ]
})
export class DbTreeModule { }
