import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, HostBinding, ChangeDetectorRef } from '@angular/core';
import { HierarchyNode, IHierarchyNodeBase } from '../../model/hierarchy-node-base.type';

@Component({
  selector: 'pcn-hierarchy-view',
  templateUrl: './hierarchy-view.component.html',
  styleUrls: ['./hierarchy-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyViewComponent<T extends IHierarchyNodeBase> implements OnInit {
  ngOnInit(): void {
    console.log(this.root);
  }

  @Input() root!: HierarchyNode<T> | undefined;
  @Input() nodeItemTemplate: TemplateRef<T> | null = null;

  public whenNodeExpanded: boolean = false;
  public whenGroupExpanded: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  @HostBinding('class.level')
  public hasChildren(node: T): boolean {
    return Array.isArray(node.next?.nodes);
  }

  public get hasItemTemplate(): boolean {
    return this.nodeItemTemplate != null;
  }

  public toggleGroup() {
    this.whenGroupExpanded = !this.whenGroupExpanded;
    // this.cdRef.markForCheck();
  }

  public toggleNode(node: T) {
    this.whenNodeExpanded = !this.whenNodeExpanded;
  }

  public isNodesVisible(): boolean {
    return this.whenGroupExpanded || this.whenNodeExpanded;
  }
}
