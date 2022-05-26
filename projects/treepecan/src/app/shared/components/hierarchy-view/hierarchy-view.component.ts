import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { HierarchyNodeArray, IHierarchyNodeBase } from '../../model/hierarchy-node-base.type';

@Component({
  selector: 'pcn-hierarchy-view',
  templateUrl: './hierarchy-view.component.html',
  styleUrls: ['./hierarchy-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyViewComponent<T extends IHierarchyNodeBase> {
  @Input() nodes!: HierarchyNodeArray<T>;
  @Input() nodeItemTemplate: TemplateRef<T> | null = null;

  public hasChildren(node: T): boolean {
    return Array.isArray(node.children) && node.children.length > 0;
  }

  public get hasItemTemplate(): boolean {
    return this.nodeItemTemplate != null;
  }

}
