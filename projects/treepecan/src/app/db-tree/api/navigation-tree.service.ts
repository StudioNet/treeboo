import { Injectable } from '@angular/core';
import { createConnections } from '../../core/helpers/node-utilities';
import { HierarchyNode, IHierarchyNodeBase } from '../../shared/model/hierarchy-node-base.type';
import { IDbTreeHierarchyNode } from '../model/db-tree-hierarchy-node.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationTreeService {

  constructor() { }

  public loadNavigationMenu(): Promise<HierarchyNode<IDbTreeHierarchyNode>> {
    return new Promise((resolve) => {
      resolve(createConnections(5, 'PostgreSQL') as HierarchyNode<IDbTreeHierarchyNode>);
    });
  }
}
