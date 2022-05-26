import { Component, OnInit } from '@angular/core';
import { createConnections } from '../../../core/helpers/node-utilities';
import { HierarchyNode, IHierarchyNodeBase } from '../../../shared/model/hierarchy-node-base.type';
@Component({
  selector: 'pcn-basic-tree',
  templateUrl: './basic-tree.component.html',
  styleUrls: ['./basic-tree.component.scss']
})
export class BasicTreeComponent {

  constructor() {
    this.nodes = createConnections(2, 'MySql');
  }

  private nodes: HierarchyNode<IHierarchyNodeBase>;

  public get basicTree() {
    return this.nodes;
  }

}
