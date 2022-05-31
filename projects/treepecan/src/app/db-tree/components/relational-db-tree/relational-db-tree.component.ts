import { Component, OnInit } from '@angular/core';
import { HierarchyNode, IHierarchyNodeBase } from '../../../shared/model/hierarchy-node-base.type';
import { NavigationTreeService } from '../../api/navigation-tree.service';
import { IDbTreeHierarchyNode } from '../../model/db-tree-hierarchy-node.interface';

@Component({
  selector: 'pcn-db-tree',
  templateUrl: './relational-db-tree.component.html',
  styleUrls: ['./relational-db-tree.component.scss']
})
export class RelationalDbTreeComponent implements OnInit {

  constructor(private navigationTreeService: NavigationTreeService) { }

  public root!: HierarchyNode<IDbTreeHierarchyNode>;

  ngOnInit(): void {
    this.navigationTreeService.loadNavigationMenu()
      .then((rootNode) => {
        this.root = rootNode;
      });
  }

}
