import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchyViewComponent } from './components/hierarchy-view/hierarchy-view.component';



@NgModule({
  declarations: [
    HierarchyViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HierarchyViewComponent
  ]
})
export class SharedModule { }
